
const Routes = {
  "nav": [
    {
      "zh": "Work",
      "en": "Work",
      "path": "work"
    },
    {
      "zh": "Personal",
      "en": "Personal",
      "path": "personal"
    },
    {
      "zh": "Contact",
      "en": "Contact",
      "path": "contact"
    }
  ] as const
}


export type PageRoutes = (typeof Routes.nav)[number]["path"];

export default Routes; 