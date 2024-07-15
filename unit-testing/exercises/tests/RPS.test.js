let whoWon = require('../RPS.js');

describe("testing whoWon", function(){
    test("should return 'TIE'",function(){
        expect(whoWon('rock','rock')).toBe('TIE!');
    });
    test("expect Player 2 to win when it's rock and paper",function(){
        expect(whoWon('rock','paper')).toBe('Player 2 wins!');
    });
    test("expect Player 2 to win when it's paper and scissors",function(){
        expect(whoWon('paper','scissors')).toBe('Player 2 wins!');
    });
    test("expect Player 2 to win when it's scissors and rock",function(){
        expect(whoWon('scissors','rock')).toBe('Player 2 wins!');
    });
    test("expect Player 1 to win when it's paper and rock",function(){
        expect(whoWon('paper','rock')).toBe('Player 1 wins!');
    });
    test("expect Player 1 to win when it's scissors and paper",function(){
        expect(whoWon('scissors','paper')).toBe('Player 1 wins!');
    });
    test("expect Player 1 to win when it's scissors and rock",function(){
        expect(whoWon('rock','scissors')).toBe('Player 1 wins!');
    });
    test("expect a 'TIE!' when function is not passed arguments.",function(){
        expect(whoWon("","")).toBe('TIE!');
    });
    
    
    
});