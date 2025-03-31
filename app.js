
// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

// One euro is:
const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// 1 euro son 1.07 dolares
// 1 dolar son 0.93 euros debo dividir el dolar
// a si mismo para obtener su valor en euros y 
// de ahi sacar el valor en yenes

const fromDollarToYen = (dollar) => {
    if (typeof dollar !== "number"){
        throw new Error("The parameter/argument should by number type");
    }
    if (dollar < 0){
        throw new Error("The parameter should be a positive number");
    }
    if (dollar > 1000000) {
        throw new Error('The amount is too large for conversion');
    }
    return ((dollar / oneEuroIs.USD) * oneEuroIs.JPY)
}


console.log(fromDollarToYen(3.5));



const fromYenToPound = (yen) => {
    if (typeof yen !== "number"){
        throw new Error("The parameter/argument should by number type");
    }
    if (yen < 0){
        throw new Error("The parameter should be a positive number");
    }
    if (yen > 1000000) {
        throw new Error('The amount is too large for conversion');
    }
    return ((yen / oneEuroIs.JPY) * oneEuroIs.GBP)
}

console.log(fromYenToPound(3.5));


// This is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7, 3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromYenToPound, fromEuroToDollar, fromDollarToYen };