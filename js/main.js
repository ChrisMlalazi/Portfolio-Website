$("#menu").click(function() {
  $( ".nav" ).fadeToggle("slow", "linear");
  $("#menu").addClass("hidden");
  $("#close").removeClass("hidden");
});
$("#close").click(function() {
  $( ".nav" ).fadeToggle("slow", "linear");
  $("#menu").removeClass("hidden");
  $("#close").addClass("hidden"); 
});