(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#li_slideBtn', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.li_slideBtn(), this.elems, 'should be chainable');
  });

  test('is awesome', function() {
    expect(1);
    strictEqual(this.elems.li_slideBtn().text(), 'awesome0awesome1awesome2', 'should be awesome');
  });

  module('jQuery.li_slideBtn');

  test('is awesome', function() {
    expect(2);
    strictEqual($.li_slideBtn(), 'awesome.', 'should be awesome');
    strictEqual($.li_slideBtn({punctuation: '!'}), 'awesome!', 'should be thoroughly awesome');
  });

  module(':li_slideBtn selector', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is awesome', function() {
    expect(1);
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(this.elems.filter(':li_slideBtn').get(), this.elems.last().get(), 'knows awesome when it sees it');
  });

}(jQuery));
