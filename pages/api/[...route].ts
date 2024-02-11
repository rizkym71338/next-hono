import { Hono } from "hono";
import { handle } from "hono/vercel";
import { prettyJSON } from "hono/pretty-json";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import modules from "@/modules";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.use(logger());
app.use("/*", cors());
app.use(prettyJSON());

modules(app);

app.get("/hello", (c) => {
  return c.json({
    message: "Hello from Hono!",
  });
});

export default handle(app);
