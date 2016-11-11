$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.menu').toggleClass('slide-down');
});

//To hide text within each image box

$(".projectText1").hide();
$(".projectText2").hide();

//To show text within each image box on hover

$(".lightbox li").on("click", function(e){
	// Prevent link from jumping to the top of the page
  e.preventDefault();
  $(".projectText1").show();
  $(".projectText2").show();

});



