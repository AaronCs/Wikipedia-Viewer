$(function(){
	var searchBox = $('.searchbox');
	var searchButton2 = $('.search-button2');
	// On the fence about this
	// 'This' as in the switching of searchbox icons.
	searchButton2.toggleClass('fa-times');
	$(".search").on('focus', function(){
		if (!searchButton2.hasClass('fa-times')){
			searchButton2.toggleClass('fa-times');
		}
	});

	$(".search").blur(function(){
		if(searchButton2.hasClass('fa-times')){
			searchButton2.toggleClass('fa-times');
		}
	});

	// Include searchbox fa-times click --> reset searchbox

	$('.search-button').on('click', function(){
		if($(".search-button").hasClass('fa-times')){
			console.log("Hello");
			$('.search:text').val('Hello');
		}
	});
});