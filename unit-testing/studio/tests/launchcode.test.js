// launchcode.test.js code:
const launchcode = require('../index.js');
let tmp = "thing";

describe("Testing launchcode", function(){
  test("object contains key labeled 'organization' and has value of nonprofit",function(){
    expect(launchcode.organization).toBe("nonprofit");

  });
  test("object contains key labeled 'executiveDirector' and has value of jeff ",function(){
    expect(launchcode.executiveDirector).toBe("Jeff");

  });
  test("object contains key labeled'percentageCoolEmployees' and value to be 100 ",function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);

  });
  test("object contains key labeled'programsOffered' and value to be provided ",function(){
    expect(launchcode.programsOffered.length).toBe(3);
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    

  });
  test("Test that the method returns a string", function(){
    expect(typeof(launchcode.launchOutput(2))).toBe(typeof("a"));

  });

  test("When passed a number that is ONLY divisible by 2, return 'Launch!'",function(){
    expect(launchcode.launchOutput(2)).toBe('Launch!');

  });

  test("When passed a number that is ONLY divisible by 3, return 'Code!'",function(){
    expect(launchcode.launchOutput(9)).toBe('Code!');

  });

  test("When passed a number that is ONLY divisible by 5, return 'Rocks!'",function(){
    expect(launchcode.launchOutput(5)).toBe('Rocks!');

  });

  test("When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'",function(){
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');

  });

  test("When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'",function(){
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');

  });
  test("When passed a number that is divisible 2 AND 5, return 'Launch Rocks!'",function(){
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks!');

  });
  test("When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'",function(){
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');

  });
  test("When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.' ",function(){
    expect(launchcode.launchOutput(13)).toBe("Rutabagas! That doesn't work.");

  });
  // Write your unit tests here!
  
});