const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('---> Ingresa tu nombre: ', function (namep) { 
    console.log(''); 
    rl.question('---> Ingresa la primera pregunta: ', function (pre1) {  
        console.log('');
        rl.question('---> Ingresa la segunda pregunta: ', function (pre2) {  
            console.log('');
            rl.question('---> Ingresa la tercera pregunta: ', function (pre3) {  
                console.log('');

                console.log('==============================================');
                console.log(`|       1. la primera pregunta es: ${pre1}         `);
                console.log(`|       2. la segunda pregunta es: ${pre2}     `);
                console.log(`|       3. La tercera pregunta es: ${pre3}    `);
                console.log(`|        Y el nombre de la persona que las realizo es: ${namep}        `);
                console.log('================================================');
                console.log('                                            ');

                rl.question('---> Ingresa tu nombre  ', function (nomr) {  
                    console.log('');
                    

                console.log('==============================================');
                console.log(`|        Que pregunta deseas responder?         `);
                console.log('================================================');
                console.log('                                            ');


                rl.question('---> Ingresa el numero de la pregunta que deseas responder...  ', function (res) {  
                     respu(res);

                     function respu(res){

                        switch(res){
                            case '1':
                                preg1();
                                break;
                            case '2':
                                preg2();
                                break;
                            case '3':
                                preg3();
                                break;

                        }
                     }

                     function preg1(){
                            console.log(`La pregunta es: ${pre1}`);
                            rl.question('---> Digita la respuesta: ', function (r1) {  
                                console.log(`El nombre de la persona que digito la respuesta ${nomr}`) 
                                console.log(`La pregunta es ${pre1}`) 
                                console.log(`y respondiste ${r1}`) 
                                rl.close();
                            
                            });
                     }
                     function preg2(){
                        console.log(`La pregunta es: ${pre2}`);
                        rl.question('---> Digita la respuesta: ', function (r2) {
                            console.log(`El nombre de la persona que digito la respuesta ${nomr}`) 
                                console.log(`La pregunta es ${pre2}`) 
                                console.log(`y respondiste ${r2}`)  
                            rl.close();
                        
                        });
                 }
                 function preg3(){
                    console.log(`La pregunta es: ${pre3}`);
                    rl.question('---> Digita la respuesta: ', function (r3) {   
                        console.log(`El nombre de la persona que digito la respuesta ${nomr}`)
                                console.log(`La pregunta es ${pre3}`) 
                                console.log(`y respondiste: ${r3}`) 
                        rl.close();
                    
                    });
             }
            });
                });
                
            
            });
        
        });
    
    });

});