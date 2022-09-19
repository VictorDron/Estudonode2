const mongoose = require ('mongoose');

//Para conectar ao mongo
mongoose.Promise = global.Promisse;
mongoose.connect('mongodb://localhost/banco', {
    useMongoClient: true
}).then(() => {
 console.log('Mongodb conectado');
}).catch((erro)=>{
    console.log('Houve um erro');
})