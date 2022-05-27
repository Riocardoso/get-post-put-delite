/* importando express */
const express = require("express");
/* chamando o express e atribundo na vareavel APP */
const app = express();
/* chamando o express para aceita  req em jason */
app.use(express.json());

//criando um objeto com dados usuarios
let usuarios = [{
id: 1,
email : "Riocardoso@ggmail.com",
nome: "ROmario"
}]

//buscando usuario
app.get('/usuarios', (req, res)=>{

    return res.send(usuarios)
});

//criando usuario
app.post('/usuarios', (req, res) =>{

    /* Dados enviados pelo usuario */
const novoUsuario = req.body;

/* criando um id para o novo usuario */
novoUsuario.id = usuarios.length + 1;

/* agora adicionando o usuario */
usuarios.push(novoUsuario);

return res.send("Usuário adicionado!")
} )

/* atualizando usuario */
app.put('/usuarios/:id', (req, res) => {

    /* pegando o id passado na url */
const { id } = req.params;

/* buscando o usuario atravez do id */ 
const usuario = usuarios.find( usuario => usuarios.id == id);

/* alteração do objeto usuario */
usuario.nome = req.body.nome;
usuario.email = req.body.email;
return res.send('Usuario alterado com sucesso!')
});

/* Removendo usuario */
app.delete('/usuario/:id', (req, res) => {const { id } = req.params;
  
const novoArrayUsuario = usuarios.filter( usuario => usuarios.id != id);

usuarios = novoArrayUsuario;

return res.send('Usuario removido com sucesso!')
})


app.listen(3000)