export default defineEventHandler(async (event) => {
  // const session = await getUserFromSession(event);
  // if (!session) {
  //   throw createError({ statusCode: 401, statusMessage: "problem" });
  // }
  const service = event.context.params?._;
  const config = useRuntimeConfig();

  if (service === "main") {
    const url = `${config.public.baseUrl}`;
    return await proxyRequest(event, url);
  }

  // if (service === "users") {
  //   console.log(event.context);
  //   const url = `${config.public.baseUrl}/api/${service}`;
  //   return await proxyRequest(event, url);
  // }
  if (service!.includes(`main`)) {
    const urlAttributes = service?.split("/")[1];
    const url = `${config.public.baseUrl}/api/${urlAttributes}`;
    return await proxyRequest(event, url);
  }

  if (service === "recommendation") {
    const url = `${config.public.openaiUrl}`;
    return await proxyRequest(event, url);
  }

  return service?.split("/")[1];

  // return `${service}`;
  // const body = await readBody(event);
  // return `${body.url}`;
  // const body = await readBody(event);
  // console.log({ body });
  // return { body };
  // return body.url!.includes(`main`);
});
