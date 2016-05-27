// modular JS #2

var search = (function(){
	// cache DOM
	var $body = $('body');
	var $searchBox = $body.find('.search-box'); // tfw forgot hyphen
	var $searchButton1 = $body.find('.search-button');
	var $searchButton2 = $body.find('.search-button2');
	var $search = $body.find('.search');
	var $random = $body.find('.random');

	// Are these two variables really necessary?
	var logicSearchFocus = $search.is(":focus");
	var logicButton2Class = $searchButton2.hasClass('fa-times');

	// bind events
	searchButtonXToggle();
	$search.on('click', searchFocus);
	$search.on('blur', searchBlur);
	$searchButton2.on('click', searchButton2Click);

	function searchButtonXToggle() {
		$searchButton2.toggleClass('fa-times');
	}

	function searchFocus() {
		if (!$searchButton2.hasClass('fa-times')){
			$searchButton2.toggleClass('fa-times');
		}
	}

	function searchBlur() {
		if (logicButton2Class && !logicSearchFocus && !$search.val().length){
			$searchButton2.toggleClass('fa-times');
		}
	}

	function searchButton2Click() {
		if($searchButton2.hasClass('fa-times')){
			$search.val('');
			$searchButton2.toggleClass('fa-times');
		}
	}
})();

var wikipediaAPI = (function(){

})();

// modular JS #1

// var searchBar = {
// 	init: function() {
// 		this.cacheDOM();
// 		this.bindEvents();
// 	},
// 	cacheDOM: function() {
// 		this.$body = $('body');
// 		this.$searchBox = this.$body.find('.search-box'); // tfw forgot hyphen
// 		this.$searchButton1 = this.$body.find('.search-button');
// 		this.$searchButton2 = this.$body.find('.search-button2');
// 		this.$search = this.$body.find('.search');
// 		this.$random = this.$body.find('.random');
//
// 		// Are these two variables really necessary?
// 		this.logicSearchFocus = this.$search.is(":focus");
// 		this.logicButton2Class = this.$searchButton2.hasClass('fa-times');
// 	},
// 	bindEvents: function() {
// 		this.searchButtonXToggle();
// 		this.$search.on('click', this.searchFocus.bind(this));
// 		this.$search.on('blur', this.searchBlur.bind(this));
// 		this.$searchButton2.on('click', this.searchButton2Click.bind(this));
// 	},
// 	searchButtonXToggle: function() {
// 		this.$searchButton2.toggleClass('fa-times');
// 	},
// 	searchFocus: function() {
// 			if (!this.$searchButton2.hasClass('fa-times')){
// 				this.$searchButton2.toggleClass('fa-times');
// 			}
// 	},
// 	searchBlur: function() {
// 		if (this.logicButton2Class && !this.logicSearchFocus && !this.$search.val().length){
// 			this.$searchButton2.toggleClass('fa-times');
// 		}
// 	},
// 	searchButton2Click: function() {
// 		if(this.$searchButton2.hasClass('fa-times')){
// 			this.$search.val('');
// 			this.$searchButton2.toggleClass('fa-times');
// 		}
// 	},
// };

// Before modular JS

// Remove this spaghetti code later.
// Events
// function events() {
// 	var searchBox = $('.searchbox');
// 	var searchButton2 = $('.search-button2');
// 	var searchButton1 = $('.search-button');
// 	var search = $('.search');
// 	var random = $('.random');
//
// 	// On the fence about this
// 	// 'This' as in the switching of searchbox icons.
// 	searchButton2.toggleClass('fa-times');
//
// 	search.on('focus', function(){
// 		if (!searchButton2.hasClass('fa-times')){
// 			searchButton2.toggleClass('fa-times');
// 		}
// 	});
//
// 	search.blur(function(){
// 		if(searchButton2.hasClass('fa-times') && !search.val()){
// 			searchButton2.toggleClass('fa-times');
// 		}
// 	});
//
// 	// Include searchbox fa-times click --> reset searchbox
//
// 	searchButton2.on('click', function(){
// 		if(searchButton2.hasClass('fa-times')){
// 			search.val('');
// 			searchButton2.toggleClass('fa-times');
// 		}
// 	});
//
// 	random.on('click', function(){
// 		apiRandomArticle();
// 	});
// }

// TODO: Wikipedia API Stuff
// TODO: Wikipedia Random Article

function apiRandomArticle() {
	var url = "https://en.wikipedia.org/wiki/Special:Random&format=JSONP&callback=?";
	$.getJSON(url, function(data){
		console.log(data);
	});
}
