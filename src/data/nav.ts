
const Routes = {
  "nav": [
    {
      "zh-CN": "工作项目",
      "en": "Work",
      "path": "work"
    },
    {
      "zh-CN": "个人作品",
      "en": "Personal",
      "path": "personal"
    },
    {
      "zh-CN": "联系方式",
      "en": "Contact",
      "path": "contact"
    }
  ] as const
}


export type PageRoutes = (typeof Routes.nav)[number]["path"];

export default Routes; 