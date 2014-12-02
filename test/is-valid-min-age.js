var test = require('tape');
var isValidMinAge = require('../is-valid-min-age');

test('is valid min age', function (t) {
  t.plan(6);

  t.equal(isValidMinAge(new Date(1996, 08, 21), 18), true);
  t.equal(isValidMinAge(new Date(1991, 08, 21), 18), true);
  t.equal(isValidMinAge(new Date(1991, 08, 40), 18), true);
  t.equal(isValidMinAge(new Date(2004, 08, 21), 18), false);
  t.equal(isValidMinAge({}), false);
  t.equal(isValidMinAge(), false);
});
