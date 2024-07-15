const fiveChecker = require('../checkFive.js');

describe("checkFive", function(){
    test("should return '5 is equal to 5.'", function(){
        expect(fiveChecker(5)).toBe('5 is equal to 5.');
    });
    test("should return '6 is greater than 5.'", function(){
        expect(fiveChecker(6)).toBe('6 is greater than 5.');
    });
    test("should return '4 is less than 5.'", function(){
        expect(fiveChecker(4)).toBe('4 is less than 5.');
    });
    test("should return '1 is less than 5'", function(){
        expect(fiveChecker(1)).toBe('1 is less than 5.');
    });


});