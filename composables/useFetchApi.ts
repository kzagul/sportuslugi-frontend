export const fetchApi = (request: any, options: any) => {
  const config = useRuntimeConfig();
  const xsrfToken = useCookie("XSRF-TOKEN");
  let headers = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    ...options?.headers,
  };
  if (xsrfToken && xsrfToken.value !== null) {
    headers["X-XSRF-TOKEN"] = xsrfToken;
  }
  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["cookie"]),
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      referer: config.public.frontendUrl,
    };
  }
  if (process.client) {
    headers = {
      ...headers,
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      ...useRequestHeaders(["cookie"]),
    };
  }
  return useFetch(request, {
    baseURL: config.public.baseUrl,
    headers,
    credentials: "include",
    ...options,
  });
};
