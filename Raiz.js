const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('---> Ingresa tu el numero que quieres sacar la raiz cuadrada ', function (num1) {  
    let resultado = parseInt(Math.sqrt(num1));
    console.log(`La raiz cuadrada de ${num1} es: ${resultado}`  )
    rl.close();

});