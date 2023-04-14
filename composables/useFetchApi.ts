export const fetchApi = (request: any, options: any) => {
  const config = useRuntimeConfig();
  const xsrfToken = useCookie("XSRF-TOKEN");
  let headers = {
    accept: "application/json",
    ...options?.headers,
  };
  if (xsrfToken && xsrfToken.value !== null) {
    headers["X-XSRF-TOKEN"] = xsrfToken;
  }
  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["cookie"]),
      referer: config.public.frontendUrl,
    };
  }
  if (process.client) {
    headers = {
      ...headers,
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
