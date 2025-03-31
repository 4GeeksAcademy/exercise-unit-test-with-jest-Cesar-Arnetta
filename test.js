// Import the function sum from the app.js file
const { sum } = require('./app.js');
const { fromYenToPound } = require('./app.js');
const { fromDollarToYen } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // This is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

describe('Test fromDollarToYen function', () => {

    test("One dollar should be 146.26168224299064 yens", () => {
        // Import the function from app.js
        const { fromDollarToYen } = require('./app.js');

        // Use the function like its supposed to be used
        const yen = fromDollarToYen(3.5);

        // If 1 dollar is 146.26168224299064 yens, then 3.5 dollars should be (3.5 * 146.26168224299064 )
        const expected = 3.5 * 146.26168224299064;

        // This is the comparison for the unit test
        expect(fromDollarToYen(3.5)).toBe(511.91588785046724); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
    })
    test.each([
        ["hola"],
        [null],
        [undefined],
    ])('Should be trigger an error', (dollar) => {
        console.log(`Running invalid test with input: ${dollar}`);
        expect(() => fromDollarToYen(dollar)).toThrow('The parameter/argument should by number type');
    });

    test('Performance test for large number of conversions', () => {
        const start = Date.now();
        for (let i = 0; i < 1000000; i++) {
            fromDollarToYen(100);
        }
        const end = Date.now();
        expect(end - start).toBeLessThan(1000); // No debe tardar más de 1 segundo
    });
});

describe('Test fromYenToPound function', () => {
    test("One yen should be 0.0055591054313099035 pounds", () => {

        // Use the function like its supposed to be used
        const pound = fromYenToPound(3.5);

        // If 1 yen  is 0.0055591054313099035 pounds, then 3.5 yens should be (3.5 * 0.0055591054313099035)
        const expected = 3.5 * 0.0055591054313099035;

        // This is the comparison for the unit test
        expect(fromYenToPound(3.5)).toBe(0.019456869009584665); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
    })

    test.each([
        ["hola"],
        [null],
        [undefined],
    ])('Should be trigger an error', (yen) => {
        console.log(`Running invalid test with input: ${yen}`);
        expect(() => fromYenToPound(yen)).toThrow('The parameter/argument should by number type');
    })

    test('Zero dollars should be zero yen', () => {
        expect(fromYenToPound(0)).toBe(0);
    });
    
    test('Negative value for conversion should return an error', () => {
        expect(() => fromYenToPound(-10)).toThrow('The parameter should be a positive number');
    });

    test('Precision test for fromYenToPound', () => {
        const yen = 3.123456;
        const pounds = fromYenToPound(yen);
        expect(pounds).toBeCloseTo(yen * 0.0055591054313099035, 5); // Compara con 5 decimales de precisión
    });

});


describe('Negative errors', () => {
test('Should throw error when passing negative values for conversion', () => {
    expect(() => fromDollarToYen(-10)).toThrow('The parameter should be a positive number');
    expect(() => fromYenToPound(-5)).toThrow('The parameter should be a positive number');
});
});


