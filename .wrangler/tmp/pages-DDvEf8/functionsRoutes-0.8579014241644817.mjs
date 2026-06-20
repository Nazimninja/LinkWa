import { onRequestPost as __api_create_js_onRequestPost } from "C:\\Users\\higho\\Downloads\\linkwa-site\\functions\\api\\create.js"
import { onRequest as ___id__js_onRequest } from "C:\\Users\\higho\\Downloads\\linkwa-site\\functions\\[id].js"

export const routes = [
    {
      routePath: "/api/create",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_create_js_onRequestPost],
    },
  {
      routePath: "/:id",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [___id__js_onRequest],
    },
  ]