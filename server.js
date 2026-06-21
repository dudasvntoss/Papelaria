const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const conexao = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "luna"
});
app.post("/usuarios", (req, res) => {
const { nome, email } = req.body;
const sql = "INSERT INTO nome_da_tabela (nome, email) VALUES (?, ?)";
conexao.query(sql, [nome, email], (erro) => {
if (erro) {
console.log(erro);
return res.status(500).json({
mensagem: "Erro ao salvar"
});
}
res.json({
mensagem: "Usuário salvo com sucesso"
});
});
});
app.get("/", (req, res) => {
res.send("Servidor funcionando");
});
app.listen(3000, () => {
console.log("Servidor rodando na porta 3000");
});