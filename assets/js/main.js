$(document).ready(function() {
  var $readmore = $("#rm-readmore");
  var $contact = $(".ct-btn");
  $readmore.on("click", function() {
  $("#main").moveTo(2);
  });

  $contact.on("click", function() {
    $("#main").moveTo(4);
    });
});
