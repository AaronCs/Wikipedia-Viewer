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
		}
		else {
			console.log("Type something in");
		}
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
