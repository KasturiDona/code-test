var isValidTest = require("./isValid-test");

var numericTest = {
  displayAll: function (num) {
    var answer = "Number is not valid";
    if (isValidTest.isValid(num)) {
      answer = [];
      for (var i = 0; i <= num; i++) {
        answer.push(i);
      }
    }
    return answer;
  },

  displayOdd: function (num) {
    var answer = "Number is not valid";
    if (isValidTest.isValid(num)) {
      answer = [];
      for (var i = 1; i <= num; i+=2) {
        answer.push(i);
      }
    }
    return answer;
  },

  displayEven: function (num) {
    var answer = "Number is not valid";
    if (isValidTest.isValid(num)) {
      answer = [];
      for (var i = 0; i <= num; i+=2) {
        answer.push(i);
      }
    }
    return answer;
  },

  displayConditional: function (num) {
    var answer = "Number is not valid";
    if (isValidTest.isValid(num)) {
      if (num % 15 === 0) {
        answer = "Z";
      }
      else if (num % 3 === 0) {
        answer = "C";
      }
      else if (num % 5 === 0) {
        answer = "E";
      }
      else {
        answer = [];
        for (var i = 0; i <= num; i++) {
          answer.push(i);
        }
      }
    }
    return answer;
  },

  displayFibonacci: function (num) {
    var answer = "Number is not valid";
    if (isValidTest.isValid(num)) {
      if (num === 0) {
        answer = [0];
      }
      else {
        answer = [0, 1];
        for(var i = answer.length; i <= num; i++) {
          answer[i] = answer[i-2] + answer[i-1];
        }
      }
    }
    return answer;
  }
};

module.exports = numericTest;
