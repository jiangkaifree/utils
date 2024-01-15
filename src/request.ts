import { Modal, message } from "antd";

const BASEURL = "/api";
// process.env.NODE_ENV === "development" ? window.location.origin + "/api" : "/api";

interface FetchHeaders {
  headers?: {
    Accept?: string;
    "Content-Type": string;
    [propName: string]: any;
  };
  signal?: AbortSignal;
  method?: "GET" | "POST";
  body?: string;
  timeout?: number;
  credentials?: "include" | "same-origin";
  mode?: "cors" | "same-origin";
  cache?: "no-cache" | "default" | "force-cache";
}

export const request = async (
  url: string,
  options: HeadersInit,
  header?: Record<string, unknown>
): Promise<any> => {
  const { body } = options;
  const token = sessionStorage.getItem("token");

  // console.log(body instanceof FormData, "body");
  const defaultOptions = {
    Authorization: token ?? "",
  };
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
    headers,
  });
  if (response.ok === true) {
    const responseHeader = response.headers.get("content-type");
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
            Modal.destroyAll();
            Modal.info({
              title: "登录过期",
              okText: "确定",
              content: "登录信息已过期，请重新登录",
              onOk: () => {
                window.location.href = "/login";
              },
            });
          default:
            return res;
        }
      }
    } catch (err) {
      // 解析 Blob
      console.log("response blob", response);
      const blob = await response.blob();
      return blob;
    }
  } else {
    // fail
    message.error("请求失败");
    return null;
  }
};
