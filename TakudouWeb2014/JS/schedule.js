$(function(){
	//開閉パネルの作成
	$('#panel dd').css('display', 'none');
	$('#panel dt').on('click',function(e) {
		/* Act on the event */
		$(this).next().slideToggle(500);
	});

	//ツールチップの作成
	$('.schedule h2')
	.mouseenter(function(e) {
		$('.tip:not(:animated)')
		.text($(this).data('tips'))
		.css({
			top: e.pageY,
			left: e.pageX
		})
		.fadeIn('500');
	})
	.mouseleave(function(e) {
		$('.tip').fadeOut('1000');
	});
});