$(document).ready(function(){
	$('#radio-back').click(function(){
		$('.cube').css({'transform':'rotateY(180deg)'});
	});
		$('#radio-left').click(function(){
		$('.cube').css({'transform':'rotateY(90deg)'});
	});
		$('#radio-right').click(function(){
		$('.cube').css({'transform':'rotateY(-90deg)'});
	});
		$('#radio-top').click(function(){
		$('.cube').css({'transform':'rotateX(-90deg)'});
	});
		$('#radio-bottom').click(function(){
		$('.cube').css({'transform':'rotateX(90deg)'});
	});
});


