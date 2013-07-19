casper.test.begin('Homepage', 1, function suite(test) {
  casper.start("http://0.0.0.0:3000", function() {
    test.assertTitle("Ruby on Rails: Welcome aboard", "title is the one expected");
  });

  casper.run(function() {
    test.done();
  });
});
