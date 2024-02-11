import { Hono } from "hono";

export default function route(app: Hono) {
  const book = new Hono();

  book.get("/", (context) => context.json({ message: "List Books" }, 200));

  app.route("/book", book);
}
