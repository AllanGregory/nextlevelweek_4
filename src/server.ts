import express from 'express';

const app = express();

/*
GET = busca
POST = salvar
PUT = alterar
DELETE = excluir
PATCH = alteração específica
*/


//http://localhost:3333/users
app.get("/", (request, response) => {
    //return response.send("grande kabelo!");
    return response.json({ message: "grande kabelo!" });
});

//1.o pâram = rota (recurso api)
//2.o pâram = request, response
app.post("/", (request, response) => {
    return response.json({ message: "dados salvos!" });
});

app.listen(3333, () => console.log("servidor funcionando!"));