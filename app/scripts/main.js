$(function(){
	$('.search-box').hide();
	// $('.big-search-button').hide();

	$('.big-search-button').on('click', function(){
		$('.big-search-button').slideToggle(500, function(){
			$('.search-box').slideToggle(600);
		});
	});

	$('body').on('click', function(evt){
		console.log(evt.target.class);
		if (evt.target.class == ".search-box"){
			return;
		}
		else {
			$('.search-box').slideToggle(500, function(){
				$('.big-search-button').slideToggle(600);
			})
		};
	});
});