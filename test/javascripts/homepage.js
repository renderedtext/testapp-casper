casper.test.begin('Homepage', 5, function suite(test) {
  casper.start("http://localhost:3000", function() {
    test.assertTitle("Ruby on Rails: Welcome aboard", "title is the one expected");
  });

  casper.run(function() {
    test.done();
  });
});
