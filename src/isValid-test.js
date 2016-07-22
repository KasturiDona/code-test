var isValidTest = {
  isValid: function (num) {
    var result = true;
    if ( num < 0 || Math.round(num) !== num ) {
      result = false;
    }
  }
  return result;
};

module.exports = isValidTest;
