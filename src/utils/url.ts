
export const getDetailAssets = (detail: string, asset: string): string => {
  const BASE_URL = import.meta.env.BASE_URL;
  return `${BASE_URL}${detail}/${asset}`;
}