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

// Model - Usuarios

    //Definindo o model
    const UserSchema = mongoose.Schema({
        nome:{
            type: String,
            require:false
        },
        sobrenome:{
            type: String,
            require:false
        },

        email:{
            type: String,
            require:false 
        },
        idade: {
            type: Number,
            require: true
        },
        pais:{
            type: String
        }


});

//Collection
mongoose.model('User', UserSchema);
const Victor = mongoose.model('User');

new UserSchema({
    nome:'Victor',
    sobrenome: "Cesar",
    email: 'Victor@',
    idade: 22,
    pais: "br"
}).save().then(()=>{
    console.log('Criado com sucesso');
}).catch((err)=>{
    console.log('Erro ao criar user');
});