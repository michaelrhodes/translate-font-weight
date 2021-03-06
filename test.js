var test = require('tape')
var weight = require('./')

test('it works', function (assert) {
  assert.equal(weight('Thin'), 100)
  assert.equal(weight('thin'), 100)
  assert.equal(weight('extra-light'), 200)
  assert.equal(weight('ultralight'), 200)
  assert.equal(weight('light'), 300)
  assert.equal(weight('300'), 300)
  assert.equal(weight(300), 300)
  assert.equal(weight('normal'), 400)
  assert.equal(weight('book'), 400)
  assert.equal(weight('Roman'), 400)
  assert.equal(weight('regular'), 400)
  assert.equal(weight('medium'), 500)
  assert.equal(weight('Semi-bold'), 600)
  assert.equal(weight('demibold'), 600)
  assert.equal(weight('bold'), 700)
  assert.equal(weight('extra-bold'), 800)
  assert.equal(weight('ultrabold'), 800)
  assert.equal(weight('black'), 900)
  assert.equal(weight('heavy'), 900)
  assert.end()
})
