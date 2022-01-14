/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    
    this.sum = function () {
      return num1 + num2;
    }
    this.substraction = function () {
      return num1 - num2;
    }
    this.multiplication = function () {
      return num1 * num2;
    }
    this.division = function () {
      return num1 / num2;
    }
  }
  
  
  let Calculator1 = new Calculator(150, 10);
  
  console.log ('skaiciai ' + Calculator1.num1 + ' ' +Calculator1.num2);
  console.log('suma ' + Calculator1.sum());
  console.log('atimtis '+ Calculator1.substraction());
  console.log('daugyba '+ Calculator1.multiplication());
  console.log('dalyba ' + Calculator1.division());