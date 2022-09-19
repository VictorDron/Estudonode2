const mongoose = require ('mongoose');

//Para conectar ao mongo
mongoose.Promisse = global.Promisse;
mongoose.connect('mongodb://localhost/banco', {
  
    

}).then(() => {
 console.log('Mongodb conectado');
}).catch((erro)=>{
    console.log('Houve um erro' + erro);
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
            require: false
        },
        pais:{
            type: String
        }


});

//Collection
mongoose.model('User', UserSchema);

const Victor = mongoose.model('User');

new Victor ({

    nome:'Dron',
    sobrenome: "Cesar",
    email: 'Victor@',
    idade: 22,
    pais: "br"

}).save().then(()=>{
    console.log('Criado com sucesso');
}).catch((err)=>{
    console.log('Erro ao criar user' + err);
});