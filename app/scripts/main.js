<<<<<<< b4a2d4a43389f120f85128ff5f798ce397cf843c
	// modular JS #2
$(document).ready(function() {
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
=======
// modular JS #2

var searchUI = (function(){
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
>>>>>>> Finished! First Version
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

	var searchWikipediaArticle = (function(){
		// cache DOM
		var $body = $('body');
		var $search = $body.find('.search-button');
		var $searchVal = $body.find('.search');
		var $ul = $body.find('ul');
		var template = $body.find('#results-template').html();

		// bind events
		$search.on('click', search);
		$body.on('keypress', enterKeyPress);

		render();

		function render() {
			var rendered = Mustache.render(template, {results: "Results"});
			$ul.html(rendered);
		}
<<<<<<< b4a2d4a43389f120f85128ff5f798ce397cf843c

		function search() {
			var query = $searchVal.val();
			if (query) {
				wikipediaSearch();
			}
			else {
				console.log("Type something in");
			}
=======
	}
})();

var searchWikipediaArticle = (function(){
	// cache DOM
	var $body = $('body');
	var $search = $body.find('.search-button');
	var $searchVal = $body.find('.search');
	var $ul = $body.find('ul');
	var $showResults = $body.find('.showResults');
	var $clear = $body.find('.clear');
	var $resultsContainer = $body.find('.resultsContainer');
	var template = $body.find('#results-template').html();
	// Compile template data into a function;
	var templateScript =  Handlebars.compile(template);

	var searchResults = {result: []};
	var templateHtml = templateScript(searchResults);
	$body.append(templateHtml);



	// bind events
	$search.on('click', search);
	$body.on('keypress', enterKeyPress);

	function search() {
		var query = $searchVal.val();
		if (query) {
			resultsReset();
			wikipediaSearch(query);
>>>>>>> Finished! First Version
		}

		function wikipediaSearch() {
			var query = $searchVal.val();
			var foundListTitle = [];
			var foundListContent = [];

			$.ajax({
				url: "https://en.wikipedia.org/w/api.php",
				jsonp: "callback",
				dataType: 'jsonp',
				data: {
					action: "query",
					format: "json",
					prop: "links",
					list: "search",
					srlimit: "9",
					srinfo: "suggestion",
					srsearch: query,
				},
				success: function(data) {
					for(var i = 0; i < data.query.search.length; i++) {
						foundListTitle.push(data.query.search[i].title);
						console.log(data.query.search[i].title);
						foundListContent.push(data.query.search[i].snippet);
						console.log(data.query.search[i].snippet);
					}
					return {foundListTitle, foundListContent};
				},
			});
		}
<<<<<<< b4a2d4a43389f120f85128ff5f798ce397cf843c

		function enterKeyPress(e) {
			if (e.which == 13) {
				search();
			}
		}
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

	// TODO: mustache.js for the wikipedia search items.
});
=======
	}

	function wikipediaSearch(query) {
		// var query = $searchVal.val();
		var foundContent = [];

		$.ajax({
			url: "https://en.wikipedia.org/w/api.php",
			jsonp: "callback",
			dataType: 'jsonp',
			data: {
				action: "query",
				format: "json",
				prop: "links",
				list: "search",
				srlimit: "9",
				srinfo: "suggestion",
				srsearch: query,
			},
			success: function(data) {
				var dataQuery = data.query.search;
				for(var i = 0; i < data.query.search.length; i++) {
					// An object containing "title" and "content" is pushed into foundContent
					foundContent.push({
						title: dataQuery[i].title, content: dataQuery[i].snippet
					});

					// console.log(dataQuery[i].title);
				}
				// console.log(foundContent[0]);
				// console.log(dataQuery);
				displayResults(foundContent);
				return {foundContent};
			},
		});
	}

	function enterKeyPress(e) {
		if (e.which == 13) {
			resultsReset();
			search();
		}
	}

	function displayResults(dataArr) {
		for(var i = 0; i < dataArr.length; i++) {
			searchResults.result.push({
				title: dataArr[i].title,
				content: dataArr[i].content,
				url: "https://en.wikipedia.org/wiki/" + dataArr[i].title
			});
		}
		// console.log(searchResults.result[6].content);
		templateHtml = templateScript(searchResults);
		$body.append(templateHtml);
	}

	function resultsReset() {
		searchResults.result = [];
		$body.find('.resultsContainer').remove();
	}
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


// TODO: Fix Results styling
>>>>>>> Finished! First Version
