/* ------------------------------ TASK 9 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funcijos
-------------------------------------------------------------------------------------------- */
import composition() from './math/composition.js';
import division()  './math/division.js';
import substraction() from './math/substraction.js';
import multiplication() from './math/multiplication.js';
import {one, two, three, four} from './numbers/numbers.js';

/*import one from './numbers/numbers.js';
import two from './numbers/numbers.js';
import three from './numbers/numbers.js';
import four from './numbers/numbers.js';*/


let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(c);
