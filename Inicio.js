const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let nick='santi'
let password='12345'

rl.question('---> Ingresa tu nombre ', function (nombre) {  
    console.log('');
    rl.question('---> Ingresa tu Contraseña ', function (contra) { 
        console.log(``); 
        
        if(nombre == nick && contra == password){
            console.log(`Bienvenido ${nombre}`);     
        }else{
            console.log(`Usuario y/o contraseña incorrecta... vulva a intentarlo...`);
        }
        rl.close();      
    });
});