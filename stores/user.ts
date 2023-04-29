import { defineStore } from "pinia";
import { User, Role } from "~~/types/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    currentUser: ({} as User) || null,
    authUser: null,
    allUsers: null,
    authUserRoles: null,
    authErrors: [],
    authStatus: null,
  }),

  getters: {
    user(): User | null {
      return this.authUser !== null ? (this.authUser as User) : null;
    },
    users(): User[] | null {
      return this.allUsers !== null ? (this.allUsers as User[]) : null;
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
        method: "GET",
        baseURL: baseUrl,
        credentials: "include",
        referer: config.public.frontendUrl,
      });
    },
    async getAllUsers() {
      try {
        const { data: res } = await fetchApi("/api/users", {
          method: "GET",
        });
        const result: any = res.value;
        this.allUsers = result.users;
      } catch (error) {
        console.log(error);
      }
    },
    async getUser() {
      try {
        const { data: res } = await fetchApi("/api/user", {
          method: "GET",
        });
        const result: any = res.value;
        this.authUser = result;
      } catch (error) {
        console.log(error);
      }
    },
    async getUserRoles() {
      try {
        const { data: res } = await fetchApi("/api/user/roles", {
          method: "GET",
        });
        const result: any = res.value;
        this.authUserRoles = result;
      } catch (error) {
        console.log(error);
      }
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

    async addNewUser(data: any) {
      this.authErrors = [];
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
      } catch (error) {
        console.log(error);
        // if (error.response.status === 422) {
        //   this.authErrors = error.response.data.errors;
        // }
      }
    },

    async editUserData(data: any) {
      this.authErrors = [];
      try {
        await fetchApi("/register", {
          method: "POST",
          body: {
            name: data.name,
            email: data.email,
          },
        });
      } catch (error) {
        console.log(error);
        // if (error.response.status === 422) {
        //   this.authErrors = error.response.data.errors;
        // }
      }
    },

    async deleteUser(data: any) {
      this.authErrors = [];
      try {
        await fetchApi("/register", {
          method: "POST",
          body: {
            name: data.name,
            email: data.email,
          },
        });
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
        const { data: res } = await fetchApi("/forgot-password", {
          // const response: any = await $fetch("/forgot-password", {
          method: "POST",
          body: {
            email,
          },
        });
        // this.authStatus = response.data.status;
        // const result: any = res.value;
        // this.authStatus = result.status;
        console.log(res);
      } catch (error: any) {
        console.log("error");
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
