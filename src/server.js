const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', function(req, res){
    res.json({
        consulta: new Date().toLocaleDateString(),
        nome: 'Rafael Leite',
        telefone:[
            {
                telefone: '22234221121'
            },
            {
                telefone: '23231212443'
            }

        ]
    })

}) // req --> requisição e res --> resposta ao cliente

const alunos = [
    {nome: 'Rafael'},
    {nome: 'João'},
    {nome: 'Maria'}

]

app.get('/obter-alunos', function(req, res){

    const nome = req.query.nome
    if(nome){
        return res.json(alunos.filter(aluno => aluno.nome === nome))
    }
    res.json(alunos)
    
})

app.post('/cadastra-aluno', function(req, res){

    alunos.push(req.query)

    res.json(alunos)
})


app.listen(3000, () => {
    console.log('Servidor rodando em: http://localhost:3000')


})