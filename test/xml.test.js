/*
    Run `npm test` to run tests
*/

var lib = {
  xml: require('../index.js'),
  chai: require('chai')
};

var expect = lib.chai.expect;

describe('xml-object module', function(done) {
  var testBattery = [
    {
      name: "simple element",
      value: {a:"Submarine"},
      result: '<a>Submarine</a>'
    },
    {
      name: "simple value",
      value: "Submarine",
      result: '<item>Submarine</item>'
    },
    {
      name: "top level array",
      value: [1,2,3],
      result: '<items type="array"><item>1</item><item>2</item><item>3</item></items>'
    },
    {
      name: "multiple elements",
      value: {a:1,b:2},
      result: '<a>1</a><b>2</b>'
    },
    {
      name: "nested elements",
      value: {a:{b:1,c:2}},
      result: '<a><b>1</b><c>2</c></a>'
    },
    {
      name: "nested arrays",
      value: {a:[[1,2],[3,4]]},
      result: '<a type="array"><item type="array"><item>1</item><item>2</item></item><item type="array"><item>3</item><item>4</item></item></a>'
    }
  ];

  for (var idx in testBattery) {
    defineTest(testBattery[idx]);
  }

  function defineTest(test) {
    it('works with ' + test.name, function(done) {
      expect(lib.xml(test.value)).to.equal(test.result);
      done();
    });
  }
});
