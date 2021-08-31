const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/", (req, res) => {
    const page = "/";
    const query = req.query;
    app.render(req, res, page, query);
  });

  server.get("/story-detail/:id", (req, res) => {
    const page = "/storyDetail";
    const params = { id: req.params.id };
    app.render(req, res, page, params);
  });

  server.get("/show", (req, res) => {
    const page = "/show";
    const query = req.query;
    app.render(req, res, page, query);
  });

  server.get("/ask", (req, res) => {
    const page = "/ask";
    const query = req.query;
    app.render(req, res, page, query);
  });

  server.get("/jobs", (req, res) => {
    const page = "/jobs";
    const query = req.query;
    app.render(req, res, page, query);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`Server is Ready on  ${process.env.URL}`);
  });
});
