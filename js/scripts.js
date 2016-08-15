$(document).ready(function() {
  var flavors = ["strawberry", "vanilla", "chocolate", "caramel"]
  var count = 1;

  flavors.forEach(function(flavor) {
    $("#flavor" + count).empty().text(flavor);
    count += 1;
  });
});
