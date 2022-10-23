


let test = "10*15";
let array = [];
let resultat=0;



if (test.includes("+") === true) {
    array = test.split(["+"]);
    const Int1 = parseInt(array[0], 10)
    const Int2 = parseInt(array[1], 10)
    resultat = Int1 + Int2
    

} else if (test.includes("-") === true) {
    array = test.split(["-"]);
    const Int1 = parseInt(array[0], 10)
    const Int2 = parseInt(array[1], 10)
    resultat = Int1 - Int2

} else if (test.includes("*") === true) {
    array = test.split(["*"]);
    const Int1 = parseInt(array[0], 10)
    const Int2 = parseInt(array[1], 10)
    resultat = Int1 * Int2

} else if (test.includes("/") === true) {
    array = test.split(["/"]);
    const Int1 = parseInt(array[0], 10)
    const Int2 = parseInt(array[1], 10)
    resultat = Int1 / Int2
}

console.log(resultat);

