import { defineStore } from "pinia";
import { User } from "~~/types/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    currentUser: ({} as User) || null,
    authUser: null,
    authErrors: [],
    authStatus: null,
  }),

  getters: {
    user(): User | null {
      return this.authUser !== null ? (this.authUser as User) : null;
    },
    errors: (state) => state.authErrors,
    status: (state) => state.authStatus,
    isAdmin(): boolean {
      return !!this.user?.roles.some((role: any) => role.name === "admin");
    },
  },

  actions: {
    async getToken() {
      const config = useRuntimeConfig();
      const baseUrl = config.public.baseUrl;
      await $fetch("/sanctum/csrf-cookie", {
        method: "GET",
        baseURL: baseUrl,
        credentials: "include",
      });
    },
    async getUser() {
      await this.getToken();
      const token: any = useCookie("XSRF-TOKEN").value;
      const config = useRuntimeConfig();
      const baseUrl = config.public.baseUrl;
      const data: any = await $fetch("/api/user", {
        method: "GET",
        headers: {
          "X-XSRF-TOKEN": token,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        baseURL: baseUrl,
        credentials: "include",
      });
      this.authUser = data[0];
    },
    async handleLogin(data: any) {
      this.authErrors = [];
      await this.getToken();
      const token: any = useCookie("XSRF-TOKEN").value;
      const config = useRuntimeConfig();
      const baseUrl = config.public.baseUrl;
      try {
        await $fetch("/login", {
          method: "POST",
          headers: {
            "X-XSRF-TOKEN": token,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          baseURL: baseUrl,
          body: {
            email: data.email,
            password: data.password,
          },
          credentials: "include",
        });
        const router = useRouter();
        router.push("/");
      } catch (error: any) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleRegister(data: any) {
      this.authErrors = [];
      await this.getToken();
      // const token = decodeURIComponent(getCookie("XSRF-TOKEN: "XSRF-TOKEN"));
      const token: any = useCookie("XSRF-TOKEN").value;
      //   const token = decodeURIComponent(getCookie("XSRF-TOKEN"));
      const config = useRuntimeConfig();
      const baseUrl = config.public.baseUrl;
      try {
        await $fetch("/register", {
          method: "POST",
          headers: {
            "X-XSRF-TOKEN": token,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          baseURL: baseUrl,
          body: {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
          },
          credentials: "include",
        });
        const router = useRouter();
        router.push("/");
      } catch (error) {
        console.log(error);
        // if (error.response.status === 422) {
        //   this.authErrors = error.response.data.errors;
        // }
      }
    },
    async handleLogout() {
      const token: any = useCookie("XSRF-TOKEN").value;
      //   const token = decodeURIComponent(getCookie("XSRF-TOKEN"));
      const config = useRuntimeConfig();
      const baseUrl = config.public.baseUrl;
      await $fetch("/logout", {
        method: "POST",
        headers: {
          "X-XSRF-TOKEN": token,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        baseURL: baseUrl,
        credentials: "include",
      });
      this.authUser = null;
    },
    async handleForgotPassword(email: any) {
      this.authErrors = [];
      this.getToken();
      try {
        const response: any = await $fetch("/forgot-password", {
          method: "POST",
          body: {
            email,
          },
        });
        this.authStatus = response.data.status;
      } catch (error: any) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleResetPassword(resetData: any) {
      this.authErrors = [];
      try {
        const response: any = await $fetch("/reset-password", {
          method: "POST",
          body: {
            resetData,
          },
        });
        this.authStatus = response.data.status;
      } catch (error: any) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
  },
});
