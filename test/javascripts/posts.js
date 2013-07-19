casper.test.begin('Posts', 2, function suite(test) {
  casper.start("http://0.0.0.0:3000/posts", function() {
    test.assertTextExists("Posts");
    test.assertTextExists("Here you can find all posts");
  });

  casper.run(function() {
    test.done();
  });
});
