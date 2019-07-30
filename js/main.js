'use strict';

function writeThis(paco){
    for (let i = 0; i < paco.total ; i++){
        console.log(i, paco.text);
    }
}
function writeMyArray(array){
    for (let item of array){
        writeThis(item);
    }
}

function writeThis2(str, max){
    for (let i = 0; i < max ; i++){
        console.log(i, str);
    }
}
function writeMyArray2(array){
    for (let item of array){
        writeThis2(item.text, item.total);
    }
}

const myWordList =  [
    {
      text: 'Pencil',
      total: 6
    },
    {
      text: 'Thermo',
      total: 2
    },
    {
      text: 'TV',
      total: 8
    },
    {
      text: 'Phone',
      total: 4
    }
  ];

  writeMyArray(myWordList);
  writeMyArray2(myWordList);