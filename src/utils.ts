/**
 * @TODO download file
 */
export const downloadFile = (blob: Blob, name: string): boolean => {
  if (blob) {
    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(blob);
    anchor.download = name;
    anchor.click();
    URL.revokeObjectURL(anchor.href);
    return true
  }
  return false
};

/**
 * @name 退出并重定向
 */
export const getUserInfo = () => {
	const userInfo = sessionStorage.getItem("userInfo") ?? "{}";
	return JSON.parse(userInfo);
};

/**
 * @name 参数序列化
 * @returns `?pageSize=10&pageNum=1`
 */
export const qs = (params: Record<string, unknown>) => {
  let result = "";
  for (const [key, value] of Object.entries(params)) {
    result += `${key}=${value}&`;
  }
  return `?${result.slice(0, result.length - 1)}`;
};

/**
 * @name 等待函数
 * @param {number} time
 */
export const waitTime = (time: number = 100) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

/**
 * @name 生成随机字符串
 */
export function generateMixed(length: number) {
  const chars =
    '0123456789ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba%@_=+&$*';
  let result = '';
  for (let i = 0; i < length; i++) {
    const id = Math.floor(Math.random() * 70);
    result += chars.charAt(id);
  }
  return result;
}

/**
 * @name 拷贝文本
 */
export const onCopyText = (text: string) => {
  const input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  input.remove();
  return true;
};