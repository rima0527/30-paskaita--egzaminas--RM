/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

console.log ('Calculator');

class Calculator {
    constructor(num1, num2, sum, substraction, multiplication, division){
this.num1= document.getElementById("firstNumber").value;
this.num2= document.getElementById("secondNumber").value;

function sum()
{
        document.getElementById("result").innerHTML = num1 + num2;
}

function substraction()
{
        document.getElementById("result1").innerHTML = num1 - num2;
}

function multiplication()
{
        document.getElementById("result2").innerHTML = num1 * num2;
}

function division() 
{ 
       document.getElementById("result3").innerHTML = num1 / num2;
}
}

alert( "Sum=" + calculator.sum());
alert( "Sub=" + calculator.substraction());
alert( "Mul=" + calculator.multiplication());
alert( "Div=" + calculator.division());

