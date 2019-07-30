'use strict';

function writeThis(str, maxNumber){
    for (let i = 0; i < maxNumber ; i++){
        console.log(i, str);
    }
}
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

writeThis('patata', getRandomNumber(10));
writeThis('aguacate', getRandomNumber(10));
writeThis('pizza', getRandomNumber(10));