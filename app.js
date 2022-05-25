const express = require("express");
const res = require("express/lib/response");

let app = express();
//Antes de criar o servidor precisamos criar uma rota:
app.get("/", (req, res) => res.send("Olá mundo"));

//criando um servidor com o express
app.listen(3000, () => console.log("O servidor está rodando na porta 3000"));
