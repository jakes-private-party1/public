// run `node index.js` in the terminal

var Parsimmon = require('parsimmon');

var a = Parsimmon.seqMap(
  Parsimmon.oneOf('Q\n').many(),
  Parsimmon.string('B'),
  Parsimmon.index,
  function (_prefix, B, index) {
    console.log(B);
    console.log(_prefix);
    console.log(index.offset); // => 8
    console.log(index.line); // => 3
    console.log(index.column); // => 5
    return B;
  }
);

// var a = Parsimmon.regexp(/\w*/);

console.log(
  Parsimmon.sepBy(Parsimmon.string('a'), Parsimmon.string('b')).parse('abab')
);
