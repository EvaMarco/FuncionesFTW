'use strict';

function writeThis(str, maxNumber){
    for (let i = 0; i < maxNumber ; i++){
        console.log(i, str);
    }
}

writeThis('patata', 10);
writeThis('aguacate', 7);
writeThis('pizza', 50);

function writeThisOb(paco){
    for (let i = 0; i < paco.max ; i++){
        console.log(i, paco.text);
    }
}

writeThisOb({text:'Patata', max:10});

const obj = {
    text: 'Aguacate',
    max: 10
}

writeThisOb(obj);