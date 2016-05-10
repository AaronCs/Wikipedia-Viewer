$(function(){
	// On the fence about this
	// 'This' as in the switching of searchbox icons.
	$(".search").on('focus', function(){
		if (!$(".search-button").hasClass('fa-times')){
			$(".search-button").toggleClass('fa-times');
		}
	});

	$(".search").blur(function(){
		if($(".search-button").hasClass('fa-times')){
			$(".search-button").toggleClass('fa-times');
		}
	});

	// Include searchbox fa-times click --> reset searchbox
});