/**
 * @TODO download file
 */
export const downloadFile = (blob: Blob, name: string) => {
  if (blob) {
    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(blob);
    anchor.download = name;
    anchor.click();
    URL.revokeObjectURL(anchor.href);
  }
};

/**
 * @name 获取登录后的sessionStorage中用户信息
 */
export const getUserInfo = () => {
	const userInfo = sessionStorage.getItem("userInfo") ?? "{}";
	return JSON.parse(userInfo);
};
