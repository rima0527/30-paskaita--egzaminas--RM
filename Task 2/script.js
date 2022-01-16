/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
var count=0

document.getElementById("btn__element").onclick=function(){
    count=count+1;
    document.getElementById("btn__state").innerHTML=count
    }
/* commit 13:42 komentaras*/