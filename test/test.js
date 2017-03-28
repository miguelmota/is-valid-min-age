var test = require('tape');
var isValidMinAge = require('../is-valid-min-age');

test('is valid min age', function (t) {
  t.plan(9);

  t.equal(isValidMinAge(new Date(1999, 02, 21), 18), true);
  t.equal(isValidMinAge(new Date(1996, 08, 21), 18), true);
  t.equal(isValidMinAge(new Date(1991, 08, 21), 18), true);
  t.equal(isValidMinAge(new Date(1991, 08, 40), 18), true);
  t.equal(isValidMinAge(new Date(2006, 05, 14), 18), false);
  t.equal(isValidMinAge(new Date(2004, 08, 21), 18), false);

  // junk inputs
  t.equal(isValidMinAge(1233), false);
  t.equal(isValidMinAge(true), false);
  t.equal(isValidMinAge({}), false);
});
