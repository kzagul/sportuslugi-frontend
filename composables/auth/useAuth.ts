// import { useAuthUser } from "./useAuthUser";
//
// import { useUserStore } from "~~/stores/user";

// const userStore = useUserStore();

// export const useAuth = () => {
//   const authUser = useAuthUser();

//   // const getUser = computed(() => {
//   //   return userStore.user;
//   // });

//   const setUser = (user: any) => {
//     authUser.value = user;
//     // authUser.value = null;
//     // authUser.value = getUser.value;
//   };

//   const setCookie = (cookie: any) => {
//     cookie.value = cookie;
//   };

//   const login = async (
//     email: string,
//     password: string,
//     rememberMe: boolean
//   ) => {
//     const data = await $fetch("/auth/login", {
//       method: "POST",
//       body: {
//         email,
//         password,
//         rememberMe,
//       },
//     });

//     setUser(data.user);

//     return authUser;
//   };

//   const logout = async () => {
//     const data = await $fetch("/auth/logout", {
//       method: "POST",
//     });

//     setUser(data.user);
//   };

//   const me = async () => {
//     if (!authUser.value) {
//       try {
//         const data = await $fetch("/auth/me", {
//           headers: useRequestHeaders(["cookie"]) as HeadersInit,
//         });

//         setUser(data.user);
//       } catch (error) {
//         setCookie(null);
//       }
//     }

//     return authUser;
//   };

//   return {
//     login,
//     logout,
//     me,
//   };
// };

// !
import { useUserStore } from "~~/stores/user";

const userStore = useUserStore();
export const useUser = async () => {
  const user = await userStore.user;

  return computed(() => {
    if (!user) return false;
    else return true;
  });
};
