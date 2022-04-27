"use strict";

 

  const sum = addition(2, 6);
  const subtract = subtraction(sum, 12);
  const multiply = multiplication(sum, subtract);
  const divide = division(multiply, subtract);
 
  console.log(sum + ' сумма');
  console.log(subtract + ' разность');
  console.log(multiply + ' умножение');
  console.log(divide + ' деление');


  /**
   * Функция складывает аргументы.
  */ 
  function addition(a, b) {
    return a + b;
  }

  // function subtraction(sum, b) {
  //   if (sum <= b) {
  //    return b - sum;
  //   } else if (sum >= b) {
  //     return sum - b;
  //   } else if (sum === b) {
  //     return +0;
  //   }
  // }

  /**
   * Функция вычитает из большего аргумента меньший.
  */ 
  function subtraction(sum, b) {
   const subtractResult = (Math.max(sum, b) - Math.min(sum, b));
   if (subtractResult === 0) {
     return +0;
   } else {
     return subtractResult;
   }
  }

  /**
   * Функция перемножает аргументы.
  */
  function multiplication(sum, subtract) {
    return sum * ++subtract;
  }
  
  /**
   * Функция делит аргумент 1 на аргумент 2.
  */
  function division(multiply, substract) {
    return multiply / substract;
  }