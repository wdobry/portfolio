var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "center",
  contain: false,
  autoPlay: 1500,
  wrapAround: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".main-carousel", {
  // options
});

flkty.on("select", function(index) {
  //   alert(index);
});
