const splitStrings= require('../scripts/exerciseOne.js'), findOutlier = require('../scripts/exerciseTwo.js'), finalGrade = require('../scripts/exerciseThree.js'), uniTotal = require('../scripts/exerciseFour.js'), elevatorDistance = require('../scripts/exerciseFive.js'), getPhrase = require('../scripts/vowels.js');

describe('Testing all exercises made to practice testing', () => {

    test("Split the string", () => {
        expect(splitStrings("abc")).toStrictEqual(['ab', 'c_']);
    });

    test("Find the lier", () => {
        expect(findOutlier([11, 4, 5])).toBe(4);
        expect(findOutlier([11, 4, 2, 6, 8])).toBe(11);
    });

    test('Final grades', () => {
        expect(finalGrade(100, 12)).toBe(100);
        expect(finalGrade(85, 5)).toBe(90);
        expect(finalGrade(52, 3)).toBe(75);
        expect(finalGrade(55, 0)).toBe(0);
    })

    test('Uni total', () => {
        expect(uniTotal('a')).toBe(97);
    })
    
    test('Elevator distance', () => {
        expect(elevatorDistance([5,2,8])).toBe(9);
    })
    
    test('Vowels', () => {
        expect(getPhrase('la')).toBe('a');
        expect(getPhrase('lela')).toBe('ea');
        expect(getPhrase('lelala')).toBe('ea');
        expect(getPhrase("Hola que tal")).toBe('oaue');
    })

})

