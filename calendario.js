
const fecha = new Date();
let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado","Domingo"];



let diactual = fecha.getDay()-1;
console.log(`Hoy es ${dias[fecha.getDay()-1]}/${fecha.getMonth()}/${fecha.getFullYear()}`);


for (let i =fecha.getDate()+1; i<=31; i++){
    if (diactual<6){
        diactual=parseInt(diactual)+1
   
        console.log(`${dias[diactual]} ${i}`);
    }
    else{
        diactual=-1;

        diactual=parseInt(diactual)+1
        console.log(`${dias[diactual]} ${i}`);
    }
}