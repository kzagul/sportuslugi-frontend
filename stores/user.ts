import { defineStore } from "pinia";
import { User, Role } from "~~/types/user";

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
      if (!this.userRoles) return false;
      // console.log("admin from store??");
      // console.log(this.userRoles?.some((role: Role) => role.name === "admin"));
      return this.userRoles?.some((role: Role) => role.name === "admin");
    },
    isModerator(): boolean {
      if (!this.userRoles) return false;
      return this.userRoles?.some((role: Role) => role.name === "moderator");
    },
  },

  actions: {
    async getToken() {
      // await fetchApi("/sanctum/csrf-cookie", {
      //   method: "GET",
      // });
      const config = useRuntimeConfig();
      const baseUrl = config.public.baseUrl;
      await $fetch("/sanctum/csrf-cookie", {
        // await $larafetch("/sanctum/csrf-cookie", {
        method: "GET",
        baseURL: baseUrl,
        credentials: "include",
        referer: config.public.frontendUrl,
      });
    },
    async getUser() {
      const { data: res } = await fetchApi("/api/user", {
        method: "GET",
      });
      const result: any = res.value;
      this.authUser = result;
    },
    async getUserRoles() {
      const { data: res } = await fetchApi("/api/user/roles", {
        method: "GET",
      });
      const result: any = res.value;
      this.authUserRoles = result;
    },
    async handleLogin(data: any) {
      this.authErrors = [];
      await this.getToken();
      try {
        await fetchApi("/login", {
          method: "POST",
          body: {
            email: data.email,
            password: data.password,
          },
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
      try {
        await fetchApi("/register", {
          method: "POST",
          body: {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
          },
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
      await fetchApi("/logout", {
        method: "POST",
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
