const expect  = require("chai").expect;
const library = require('../app') ;

describe('app', function() {
  describe('filter fn', function() {
    it('filter of array ', function() {
        const result = library.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
        expect(result).to.deep.equal([2, 4, 6])
    });
  });
});

describe('app', function() {
  describe('filter fn', function() {
    it('reduce of array ', function() {
        const result = library.reduce([1, 2, 3, 4], function(accumulator,currentValue){ return accumulator+ currentValue }, 1);
        expect(result).to.equal(11)
    });
  });
});



describe('app', function() {
  describe('filter fn', function() {
    it('flatten of array ', function() {
        const result = library.flatten([1, [2], [3, [[4]]]]);
        expect(result).to.deep.equal([1, 2, 3, 4])
    });
  });
});