import express from "express";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

const times = [
  { id: 1, nome: "Grêmio", cores: "Azul, Preto e Branco", cidade: "Porto Alegre" },
  { id: 2, nome: "Internacional", cores: "Vermelho e Branco", cidade: "Porto Alegre" },
  { id: 3, nome: "Juventude", cores: "Verde e Branco", cidade: "Caxias do Sul" }
];

app.get("/", (req, res) => {
  res.render("index", { mensagem: "Bem-vindo ao Catálogo de Times Esportivos!" });
});

app.get("/times", (req, res) => {
  res.render("times", { listaTimes: times });
});

app.get("/times/:id", (req, res) => {
  const idParam = parseInt(req.params.id);
  const timeEncontrado = times.find(t => t.id === idParam);

  if (!timeEncontrado) {
    return res.status(404).send("Time não encontrado.");
  }

  res.render("detalhe", { time: timeEncontrado });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});