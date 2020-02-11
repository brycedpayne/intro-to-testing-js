// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// unit test for sayHello function.
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when input is Jane', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when input is Alex', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when input is Pat', function() {
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when input is undefined', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input is boolean', function() {
        expect(sayHello(true)).toBe("Hello, World!");
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input is null', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input is an empty string', function() {
        expect(sayHello('')).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input is a number', function() {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input is a number as a string', function() {
        expect(sayHello('5')).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input is an array', function() {
        expect(sayHello([1,2,3])).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should always return a boolean', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when input is 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when input is 5 as a string', function() {
        expect(isFive('5')).toBe(true);
    });
    it('should return false when input is boolean', function() {
        expect(isFive(true)).toBe(false);
        expect(isFive(false)).toBe(false);
    });
    it('should return false when input is a string', function () {
        expect(isFive('Bob')).toBe(false);
    });
    it("should never return 'undefined' when called", function() {
        expect(isFive()).not.toBe(undefined);
    });
    it('should return false when input is an array', function() {
        expect(isFive([1,2,5])).toBe(false);
    });
    it('should return true when input is 5 as a float', function() {
        expect(isFive(5.0)).toBe(true);
    });
    it('should return true when input is 5 as a string', function() {
        expect(isFive('5.0')).toBe(true);
    });
});

describe('isEven',function () {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should always return a boolean', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when input is 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when input is -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when input is 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when input is "banana"', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when input is 8', function() {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when input is infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when input is boolean', function() {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it("should never return 'undefined' when called", function() {
        expect(isEven()).not.toBe(undefined);
    });
    it("should return false when input is undefined", function() {
        expect(isEven()).toBe(false);
    });
    it("should return true when input is 0", function() {
        expect(isEven(0)).toBe(true);
    });
});

describe('isVowel', function () {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should always return a boolean', function() {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when input is "a"', function () {
        expect(isVowel('a')).toBe(true);
    });
    it('should return false when input is undefined', function() {
        expect(isVowel()).toBe(false);
    });
    it('should return true when input is "A"', function () {
        expect(isVowel('A')).toBe(true);
    });
    it('should return false when input is "y"', function () {
        expect(isVowel('y')).toBe(false);
    });
    it('should return false when input is 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when input is boolean', function() {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when input is "banana"', function() {
        expect(isVowel('banana')).toBe(false);
    });
});

describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when passed 2 & 3 as inputs', function () {
        expect(add(2,3)).toBe(5);
    });
    it('should return -12 when passed -3 & -9 as inputs', function () {
        expect(add(-3,-9)).toBe(-12);
    });
    it('should return 11 when passed "5" & 6', function () {
        expect(add("5",6)).toBe(11);
    });
    it('should return 6 when passed "-4" & "10"', function () {
        expect(add("-4","10")).toBe(6);
    });
    it('should should return NaN when passed "banana" & "split"', function () {
        expect(add("banana","split")).toBeNaN();
    });
    it('should should return NaN when passed 2 & "apples"', function () {
        expect(add(2,"apples")).toBeNaN();
    });
    it('should should return NaN when passed nothing', function () {
        expect(add()).toBeNaN();
    });
});


// The add function should sum two numbers, as long as each input is a number or a string containing a number.
//     Write each assertion, confirm the test fails, write only enough code to green that specific test, refactor, then repeat (move onto the next test.)
// Assert that add:
//     add(2, 3) returns 5
// add(-3, -9) returns -12
// add("5", 6) returns 11
// add("-4", "10") returns 6
// add("banana", "split") returns NaN
// add(2, "apples") returns NaN
// add() returns NaN





