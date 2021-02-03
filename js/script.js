"use strict"
let name = prompt("What is your name?");
let age = prompt("What is your age?");
if (age<0||age>100||age===null||age==''||name==''){
    alert(`Data entered is not correct!`);
} else if (age <= 16){
    console.log(`Hello ${name}! You are a teenager!`);
} else if (age>16 && age<=40) {
   console.log(`Hello ${name}! You are a young man!`);
} else {
    console.log(`Hello ${name}! You are an old man!`);
};

