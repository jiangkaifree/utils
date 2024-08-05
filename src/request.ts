interface FetchHeaders {
  headers?: {
    Accept?: string;
    "Content-Type": string;
    [propName: string]: any;
  };
  signal?: AbortSignal;
  method?: "GET" | "POST";
  body?: FormData | Record<string, unknown>;
  timeout?: number;
  credentials?: "include" | "same-origin";
  mode?: "cors" | "same-origin";
  cache?: "no-cache" | "default" | "force-cache";
}

export const request = async (
  url: string,
  options: FetchHeaders,
  header?: Record<string, unknown>
): Promise<any> => {
  const { body } = options;
  const token = sessionStorage.getItem("token");
  let newHeaders;
  if (body instanceof FormData) {
    newHeaders = Object.assign(defaultOptions, header);
  } else {
    newHeaders = Object.assign(defaultOptions, header, {
      "Content-Type": "application/json;charset=UTF-8",
    });
  }
  const headers = new Headers(newHeaders);
  const response = await fetch(`${BASEURL}${url}`, {
    ...options,
    body: JSON.stringify(body),
    headers,
  });
  if (response.ok === true) {
    // console.log(responseHeader, "header");
    try {
      // 解析json
      // console.log()
      // const res = await response.text();
      // const res = await response.blob();
      const res = await response.clone().json();
      if (res) {
        // const { data, code, msg } = ;
        switch (res.code) {
          case 200:
            return res;
          case 401:
            // 去登录

          default:
            return res;
        }
      }
    } catch (err) {
      // 解析 Blob
      return await response.blob();
    }
  } else {
    return null;
  }
};
