import { defineStore } from "pinia";
import { User, Role } from "~~/types/user";
// import { fetchApi } from "~~/composables/useFetchApi";

export const useUserStore = defineStore("user", {
  state: () => ({
    currentUser: ({} as User) || null,
    authUser: null,
    authUserRoles: null,
    authErrors: [],
    authStatus: null,
  }),

  getters: {
    user(): User | null {
      return this.authUser !== null ? (this.authUser as User) : null;
    },
    // user: (state) => state.authUser,
    // userRoles: (state) => state.authUserRoles,
    userRoles(): Role[] | null {
      return this.authUserRoles !== null
        ? (this.authUserRoles as Role[])
        : null;
    },
    errors: (state) => state.authErrors,
    status: (state) => state.authStatus,
    // isAdmin(): boolean {
    //   return !!this.user?.roles.some((role: any) => role.name === "admin");
    // },
    isAdmin(): boolean {
      return !!this.userRoles?.some((role: any) => role.name === "admin");
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
        referer: config.public.baseUrl,
      });
    },
    async getUser() {
      await this.getToken();
      const token: any = useCookie("XSRF-TOKEN").value;
      const config = useRuntimeConfig();
      const baseUrl = config.public.baseUrl;
      const data: any = await $fetch("/api/user", {
        // const response: any = await fetchApi("/api/user", {
        method: "GET",
        headers: {
          "X-XSRF-TOKEN": token,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        baseURL: baseUrl,
        credentials: "include",
        referer: config.public.baseUrl,
      });
      this.authUser = data;
    },
    async getUserRoles() {
      await this.getToken();
      const token: any = useCookie("XSRF-TOKEN").value;
      const config = useRuntimeConfig();
      const baseUrl = config.public.baseUrl;
      const data: any = await $fetch("/api/user/roles", {
        // const data: any = await fetchApi("/api/user/roles", {
        method: "GET",
        headers: {
          "X-XSRF-TOKEN": token,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        baseURL: baseUrl,
        credentials: "include",
        referer: config.public.baseUrl,
      });
      this.authUserRoles = data;
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
          referer: config.public.baseUrl,
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
        this.authUser = data;
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
      this.authUserRoles = null;
      const router = useRouter();
      router.push("/");
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
