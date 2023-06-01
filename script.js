//1.
let numero=prompt("Dime un numero");
let control=1;
while (control<=numero) {
    control=control+1;
 if(control%5==0){
    alert(control);
 }
   
}
//2.
let numero1=prompt("Dime un numero entre 1 y 50");
let numero2= prompt("Dime otro numero entre 1 y 50");
control=1;
while(control<=50){
    
    if(control==numero1 || control==numero2){
        console.log("LOTERIA");
    }
    else{
        console.log(control);
    }
    control=control+1;
}
//3.
let captura=1;
let arreglo = [];
while (captura!==0) {
    captura= prompt("dime un numero");
    captura= parseInt(captura);
    if (!isNaN(captura)){
        arreglo.push(captura);

    }
   console.log(arreglo); 
}*/
//5.
let dia="vacio";
while (dia=="domingo") {

    dia=prompt("dime un dia de la semana");
    if(dia.toLowerCase()=="lunes"){
        alert("los lunes te atendemos en la tarde");
    }
    else if(dia.toLowerCase()=="martes"){
        alert("hoy es martes de concentración");  
    }
    else if(dia.toLowerCase()=="miercoles"){
        alert("ombligo de semana");  
    }
    else if(dia.toLowerCase()=="jueves"){
        alert("hoy es juernes");  
    }
    else if(dia.toLowerCase()=="viernes"){
        alert("es viernes y el cuerpo lo sabes");  
    }
    else if(dia.toLowerCase()=="sabado"){
        alert("sabado de diversion");  
    }
    dia= dia.toLowerCase;
}
alert("Ve a descansar");