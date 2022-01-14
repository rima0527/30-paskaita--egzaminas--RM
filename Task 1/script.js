/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const output = document.getElementById("output");
const form = document.querySelector("form").addEventListener("submit", fn);
const input = document.getElementById("search");

function fn(e) {
  e.preventDefault();
  const convertToLbs = input.value * 2.2046;
  const convertToG = input.value / 0.0010000;
  const convertToOz = input.value * 35.274;
  output.textContent = `Lb: ${convertToLbs}  Grams: ${convertToG}     
    Oz: ${convertToOz}       `;

  
}

