const screen = document.querySelector(".screen__text");
const btnClear = document.querySelector(".keyboard__clear");
const btnDiv = document.querySelector(".keyboard__div");
const btnMultiplication = document.querySelector(".keyboard__multiplication");
const btnSoustraction = document.querySelector(".keyboard__soustraction");
const btnSeven = document.querySelector(".keyboard__seven");
const btnEight = document.querySelector(".keyboard__eight");
const btnNine = document.querySelector(".keyboard__nine");
const btnAddition = document.querySelector(".keyboard__addition");
const btnFour = document.querySelector(".keyboard__four");
const btnFive = document.querySelector(".keyboard__five");
const btnSix = document.querySelector(".keyboard__six");
const btnGo = document.querySelector(".keyboard__go");
const btnOne = document.querySelector(".keyboard__one");
const btnTwo = document.querySelector(".keyboard__two");
const btnThree = document.querySelector(".keyboard__three");
const btnZero = document.querySelector(".keyboard__zero");
const btnDot = document.querySelector(".keyboard__dot");



let screenText = [];

function print(value) {
    screenText += value;
    screen.textContent = screenText

}



btnClear.onclick = function () { screenText = ""; screen.textContent = screenText }
btnOne.onclick = function () { print("1") }
btnTwo.onclick = function () { print("2") }
btnThree.onclick = function () { print("3") }
btnFour.onclick = function () { print("4") }
btnFive.onclick = function () { print("5") }
btnSix.onclick = function () { print("6") }
btnSeven.onclick = function () { print("7") }
btnEight.onclick = function () { print("8") }
btnNine.onclick = function () { print("9") }
btnZero.onclick = function () { print("0") }

btnAddition.onclick = function () { print("+") }
btnSoustraction.onclick = function () { print("-") }
btnMultiplication.onclick = function () { print("*") }
btnDiv.onclick = function () { print("/") }



function calculator(str) {

    let array = [];
    let resultat = 0;

    if (str.includes("+") === true) {
        array = str.split(["+"]);
        const Int1 = parseInt(array[0], 10)
        const Int2 = parseInt(array[1], 10)
        resultat = Int1 + Int2


    } else if (str.includes("-") === true) {
        array = str.split(["-"]);
        const Int1 = parseInt(array[0], 10)
        const Int2 = parseInt(array[1], 10)
        resultat = Int1 - Int2

    } else if (str.includes("*") === true) {
        array = str.split(["*"]);
        const Int1 = parseInt(array[0], 10)
        const Int2 = parseInt(array[1], 10)
        resultat = Int1 * Int2

    } else if (str.includes("/") === true) {
        array = str.split(["/"]);
        const Int1 = parseInt(array[0], 10)
        const Int2 = parseInt(array[1], 10)
        resultat = Int1 / Int2
    }

    return resultat


}


btnGo.onclick = function () {

    let result = calculator(screenText)
    screen.textContent = result
}






