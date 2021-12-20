// run `node index.js` in the terminal

var Parsimmon = require('parsimmon');

var a = Parsimmon.seqMap(
  Parsimmon.oneOf('Q\n').many(),
  Parsimmon.string('B'),
  Parsimmon.index,
  function (_prefix, B, index) {
    console.log(B);
    return B;
  }
);

// var a = Parsimmon.regexp(/\w*/);

console.log(
  Parsimmon.sepBy(Parsimmon.string('a'), Parsimmon.string('b')).parse('abab')
);
