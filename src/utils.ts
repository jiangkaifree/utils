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
