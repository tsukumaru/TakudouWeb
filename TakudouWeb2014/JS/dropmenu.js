$(function(){
	$('#aboutus ul').hide();
	$('#aboutus').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('ul:not(:animated)',this).slideDown();
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('ul', this).slideUp();
	});

	$('#schedule ul').hide();
	$('#schedule').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('ul:not(:animated)',this).slideDown();
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('ul', this).slideUp();
	});
});
