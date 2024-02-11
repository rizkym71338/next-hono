import { Hono } from "hono";
import bookRoute from "./book/route";

export default function modules(app: Hono) {
  const routes = [bookRoute];

  routes.forEach((route) => route(app));
}
