const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" });
    switch (req.url) {
      case "/":
        res.end("Você está na página home!");
        break;
      case "/contato":
        res.end("vocês está na página contato");
        break;
      default:
        res.end("você está no nosso servidor");
    }

    // res.end("Meu primeiro servidor!");
  })
  .listen(3000);
