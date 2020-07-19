describe("fizzBuzz function", function() {                              // Where it says 'fizzBuzz function', this will be the title of the testing page.
    beforeEach(function() {
        fizzbuzz = new fizzBuzz();                                      // Each time the scenario is ran, it is reset back to 0
    });
    describe("returns Buzz/Fizz/fizzBuzz/number", function() {
        it("should exist", function() {                                 // firstly we make sure that there is an expectation for the parameter to be defined
            expect(fizzBuzz).toBeDefined();
        });
        it("should return fizzBuzz", function() {                       // scenrio 1 - if the number is divisible by 5 and 3 - fizzbuzz
            let result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz");
        });
        it("should return fizz", function() {                           // scenario 2 - if the number is divisible by 3 and not 5 - Fizz
            let result = fizzBuzz(9);
            expect(result).toBe("Fizz");
        });
        it("should return Buzz", function() {                           // scenario 3 - if the number is divisible by 5 and not 3 - buzz
            let result = fizzBuzz(20);
            expect(result).toBe("Buzz");
        });
        it("should return number", function() {                         // scenario 4 - if the number is not divisible by 5 or 3, then the input number is returned
            let result = fizzBuzz(1);
            expect(result).toBe(1);
        });
    });
})