
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
    return ((dollar / oneEuroIs.USD) * oneEuroIs.JPY)
}


console.log(fromDollarToYen(10));

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD
}


console.log(fromEuroToDollar(10));

const fromYenToPound = (yen) => {
    return ((yen / oneEuroIs.JPY) * oneEuroIs.GBP)
}

console.log(fromYenToPound(10));


// This is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7, 3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromYenToPound, fromEuroToDollar, fromDollarToYen };