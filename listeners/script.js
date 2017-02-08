document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  var div =
    document.getElementById('click').addEventListener("click", function() {
      console.log("click");
      console.log(this.tagName); // note event.target gives element where event is captured, possibly a child element
      console.log(event.pageX, event.pageY);
      console.log(event.clientX, event.clientY);
      this.style.background = "blue";
    });

});
