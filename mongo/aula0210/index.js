const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/aula0210',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    serverSelectionTimeoutMS : 20000
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', ()=>{
    console.log('Conectado ao banco de dados');
});

const alunoSchema = new mongoose.Schema({
    nome : String,
    idade : Number,
    turma : String
});

const Alunos = mongoose.model('Alunos', alunoSchema)

Alunos.insertMany([
    {nome : 'Maria', idade : 15, turma : 'Turma1'},
    {nome : 'Paulo', idade : 16, turma : 'Turma2'},
    {nome : 'Pedro', idade : 17, turma : 'Turma1'},
])

async function findAlunos(){
    try{
        const alunos = await Alunos.find({turma : 'Turma2'});
        console.log("Alunos : ", alunos) 
    }
    catch(error){
        console.error('Error na busca :', error)
    }
}
findAlunos();