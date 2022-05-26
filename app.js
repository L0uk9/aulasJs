const express = require("express");
// const res = require("express/lib/response");

let app = express();
//Antes de criar o servidor precisamos criar uma rota:

app.post("/", (req, res) => res.send("Olá mundo"));
app.get("/contatos", (req, res) => res.send({ nome: "Lucas", idade: 26 }));

let produto = {
  tipoProduto: null,
  preco: null,
  quantidade: null,
};

app.post("/produto/criar", (req, res) => {
  (produto.tipoProduto = "living"),
    (produto.preco = 1245),
    (produto.quantidade = 300);
  res.send(produto);
});

//criando um servidor com o express
app.listen(3000, () => console.log("O servidor está rodando na porta 3000"));
