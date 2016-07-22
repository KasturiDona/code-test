// Require the dependencies
var isValidTest = require("./isValid-test");
var numericTest = require("./numeric-test");
var chai = require("chai");
var expect = chai.expect;

// Test if the number is greater than or equal to 0 and not a floating point number
describe("isValid Test", function () {
  describe("Should accept only positive numbers", function () {
    it("should be atleast 0", function() {
      var result = isValidTest.isValid(-1)
      expect(result).to.equal(false);
    })
    it("should be atleast 0 and integer", function() {
      var result = isValidTest.isValid(-10.2)
      expect(result).to.equal(false);
    })
    it("should be atleast 0", function() {
      var result = isValidTest.isValid(0)
      expect(result).to.equal(true);
    })
    it("should be atleast 0", function() {
      var result = isValidTest.isValid(1)
      expect(result).to.equal(true);
    })

    // it("should be an integer", function() {
    //   var result = isValidTest.isValid(1.5)
    //   expect(result).to.equal(false);
    // })
  });
});

// Numeric Test function
describe("Numeric Test", function () {

  // Test for the displayAll function
  describe("Display all numbers up to and including the number entered", function () {
    it("should correctly display all the numbers", function () {
      var result = numericTest.displayAll(4);
      expect(result).to.eql([0, 1, 2, 3, 4]);
    })
    it("should display error message", function () {
      var result = numericTest.displayAll(-4);
      expect(result).to.eql("Number is not valid");
    })
    // it("should display error message", function () {
    //   var result = numericTest.displayAll(4.5);
    //   expect(result).to.eql("Number is not valid");
    // })
  });

  // Test for the displayOdd function
  describe("Display all odd numbers up to and including the number entered", function () {
    it("should correctly display all the odd numbers", function () {
      var result = numericTest.displayOdd(4);
      expect(result).to.eql([1, 3]);
    })
    it("should display error message", function () {
      var result = numericTest.displayOdd(-4);
      expect(result).to.eql("Number is not valid");
    })
    // it("should display error message", function () {
    //   var result = numericTest.displayOdd(4.5);
    //   expect(result).to.eql("Number is not valid");
    // })
  });

  // Test for the displayEven function
  describe("Display all even numbers up to and including the number entered", function () {
    it("should correctly display all the even numbers", function () {
      var result = numericTest.displayEven(4);
      expect(result).to.eql([0, 2, 4]);
    })
    it("should display error message", function () {
      var result = numericTest.displayEven(-4);
      expect(result).to.eql("Number is not valid");
    })
    // it("should display error message", function () {
    //   var result = numericTest.displayEven(4.5);
    //   expect(result).to.eql("Number is not valid");
    // })
  });

  // Test for the displayConditional function
  describe("Display C if number is a multiple of 3, E if multiple of 5, Z if multiple of 3 and 5 else display all numbers up to and including the number entered", function () {
    it("should correctly display all the numbers", function () {
      var result = numericTest.displayConditional(4);
      expect(result).to.eql([0, 1, 2, 3, 4]);
    })
    it("should display C", function () {
      var result = numericTest.displayConditional(3);
      expect(result).to.eql("C");
    })
    it("should display C", function () {
      var result = numericTest.displayConditional(27);
      expect(result).to.eql("C");
    })
    it("should display E", function () {
      var result = numericTest.displayConditional(5);
      expect(result).to.eql("E");
    })
    it("should display E", function () {
      var result = numericTest.displayConditional(100);
      expect(result).to.eql("E");
    })
    it("should display Z", function () {
      var result = numericTest.displayConditional(15);
      expect(result).to.eql("Z");
    })
    it("should display Z", function () {
      var result = numericTest.displayConditional(60);
      expect(result).to.eql("Z");
    })
    it("should display error message", function () {
      var result = numericTest.displayConditional(-20);
      expect(result).to.eql("Number is not valid");
    })
    // it("should display error message", function () {
    //   var result = numericTest.displayConditional(5.5);
    //   expect(result).to.eql("Number is not valid");
    // })
  });

  // Test for the displayFibonacci function
  describe("Display all fibonacci number up to and including the number entered", function () {
    it("should correctly display the fibonacci numbers", function () {
      var result = numericTest.displayFibonacci(7);
      expect(result).to.eql([0, 1, 1, 2, 3, 5, 8, 13]);
    })
    it("should display error message", function () {
      var result = numericTest.displayFibonacci(0);
      expect(result).to.eql([0]);
    })
    it("should display error message", function () {
      var result = numericTest.displayFibonacci(1);
      expect(result).to.eql([0, 1]);
    })
    it("should display error message", function () {
      var result = numericTest.displayFibonacci(-4);
      expect(result).to.eql("Number is not valid");
    })
    // it("should display error message", function () {
    //   var result = numericTest.displayFibonacci(4.5);
    //   expect(result).to.eql("Number is not valid");
    // })
  });

});
