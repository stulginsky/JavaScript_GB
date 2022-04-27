"use strict";

console.log(mathOperation(5, 3, "+"));
console.log(mathOperation(7, 12, "-"));
console.log(mathOperation(7, 2, "*"));
console.log(mathOperation(3, 2, "/"));
console.log(mathOperation(1, 1, ";)"));


  /**
   * Функция совершает математическое действие в зависимомти от переданного аргумента "operation".
  */ 
  function mathOperation(arg1, arg2, operation) {
   if (operation === "+") {
     return addition(arg1, arg2);
   } else if (operation === "-") {
     return subtraction(arg1, arg2);
   } else if (operation === "*") {
     return multiplication(arg1, arg2);
   } else if (operation === "/") {
     return division(arg1, arg2);
   } else {
     return NaN;
   }
 }

 
  /**
   * Функция складывает аргументы.
  */ 
  function addition(arg1, arg2) {
    return arg1 + arg2;
  }
 
  /**
   * Функция вычитает из большего аргумента меньший.
  */ 
  function subtraction(arg1, arg2) {
   const subtractResult = (Math.max(arg1, arg2) - Math.min(arg1, arg2));
   if (subtractResult === 0) {
     return +0;
   } else {
     return subtractResult;
   }
  }

  /**
   * Функция перемножает аргументы.
  */
  function multiplication(arg1, arg2) {
    return arg1 * arg2;
  }
  
  /**
   * Функция делит аргумент 1 на аргумент 2.
  */
  function division(arg1, arg2) {
    return arg1 / arg2;
  }

  


  

  