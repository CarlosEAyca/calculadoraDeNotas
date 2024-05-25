'use strict';

let notas=[];

alert('Bienvenido carlos, esta es la calculadora que pide 3 notas');

for(let carlos=1;carlos<4;carlos++){
    let nota=parseInt(prompt('Ingresa la nota ' + carlos));
    notas.push(nota);
}                                       
console.log(notas); 	                

function calculaPromedio(arr){

    let total=0;
    for(let i=0;i<notas.length;i++){
        total +=notas[i];
    }
    let promedio=total/notas.length;
    return promedio;

    
}

let resultado=calculaPromedio(notas);
console.log('el promedio de las 3 notas es:'+ resultado);
alert('el promedio de las 3 notas es:'+ resultado);