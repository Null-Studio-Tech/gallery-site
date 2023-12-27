
export const getPublicSourcePath = (basePaths: string[], asset: string): string => {
  const BASE_URL = import.meta.env.BASE_URL;
  return `${BASE_URL}${basePaths.join('/')}/${asset}`;
}

export const isGifPath = (url: string) => {
  // 获取文件扩展名
  const fileExtension = url.split(".").pop()?.toLowerCase(); // 判断文件扩展名是否为gif
  if (fileExtension === "gif") {
    return true;
  } else {
    return false;
  }
};