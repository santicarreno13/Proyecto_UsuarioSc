const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('---> Ingresa tu nombre: ', function (nombre) {   
    console.log('');
    rl.question('---> Ingresa tu apellido: ', function (apellido) {   
      console.log('');
      rl.question('---> Ingresa tu Telefono: ', function (telefono) {   
        console.log('');    
        rl.question('---> Ingresa tu Correo electronico: ', function (correo) {   
            console.log('');
            rl.question('---> Ingresa tu nick: ', function (nick) {   
                console.log('');
                rl.question('---> Ingresa tu tipo de sangre: ', function (sangre) {   
                    console.log('');  
                  
                  rl.question('---> Ingresa tu fecha de nacimiento: ', function (nacimiento) {   
                    console.log('');  
                  
                  rl.question('---> Ingresa tu Ciudad: ', function (ciudad) {   
                    console.log('');

                    rl.question('---> Ingresa lo que te gusta hacer: ', function (like) {   
                        console.log('');
                        
                console.log('==============================================');
                console.log(`|        Tu Nombre es: ${nombre}         `);
                console.log(`|        Tu Apellido es: ${apellido}     `);
                console.log(`|        Tu Telefono es: ${telefono}     `);
                console.log(`|        Tu Correo es: ${correo}         `);
                console.log(`|        Tu Nick es: ${nick}             `);
                console.log(`|        Tu tipo de sangre es: ${sangre}         `);
                console.log(`|        Tu dia de nacimiento es: ${nacimiento}     `);
                console.log(`|        Tu ciudad es: ${ciudad}     `);
                console.log(`|        Y lo que mas te gusta hacer es: ${like}         `);
                console.log('================================================');
                console.log('                                            ');
                rl.close();
                        
                      });
                  });
                });
            });
              });
            
            
          
          });
        
      
      });
      
    
    });
    
  });