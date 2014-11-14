$(document).ready(function() {


$('.ryu').mouseenter(function() {
	$('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
	$('.ryu-still').show();
    $('.ryu-ready').hide();
  })
  .mousedown(function() {
    playHadouken();    
  	$('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
    	{'left': '300px'},
    	500,
    	function() {
    		$(this).hide();
          	$(this).css('left', '-212px');
          }
    );
  })
  .mouseup(function() {
  $('.ryu-throwing').hide();
  $('.ryu-ready').show();
  });



}).keydown( function(event) {

if ( event.which == 88 ) {
    $('.ryu-cool').show();
   	$('.ryu-ready').hide();
   	$('.ryu-still').hide();

  }

}).keyup(function() {
  $('.ryu-cool').hide();
  if ($('.ryu').is(':hover')) {
    $('.ryu-ready').show();
  } else {
    $('.ryu-still').show();
  }
})

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}