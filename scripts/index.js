/**
 * QUESTIONS: 
 *  Does .getJSON return its own data? Answered
 */

const API_KEY = 'AIzaSyDbHRxDgCEttJI4x0R7drtclNmnaPVmzEE';

const mockData = [{
	id: "hY7m5jjJ9mM",
	thumbnail: "https://i.ytimg.com/vi/hY7m5jjJ9mM/hqdefault.jpg",
	title: "CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation",
},

{
	id: "5dsGWM5XGdg",
	thumbnail: "https://i.ytimg.com/vi/5dsGWM5XGdg/hqdefault.jpg",
	title: "Cats are so funny you will die laughing - Funny cat compilation",
},

{
	id: "WEkSYw3o5is",
	thumbnail: "https://i.ytimg.com/vi/WEkSYw3o5is/hqdefault.jpg",
	title: "You will LAUGH SO HARD that YOU WILL FAINT - FUNNY CAT compilation",
},

{
	id: "vcrjuOH5R3A",
	thumbnail: "https://i.ytimg.com/vi/vcrjuOH5R3A/hqdefault_live.jpg",
	title: "Cat Music Live TV / Non Stop Music 24/7 🎧",
},

{
	id: "opYts0nFOvs",
	thumbnail: "https://i.ytimg.com/vi/opYts0nFOvs/hqdefault.jpg",
	title: "NINJA CATS! There's absolutely NOTHING MORE FUNNY!  - Impossible TRY NOT TO LAUGH compilation",
},
];

const store = {
	videos: []
};

let sampleQuery = 'cats';

// TASK: Add the Youtube Search Base URL here: "https://www.googleapis.com/youtube/v3/search"
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// buildApiRequest('GET',
//                 '/youtube/v3/search',
//                 {'maxResults': '25',
//                  'part': 'snippet',
//                  'q': 'surfing',
//                  'type': ''});
// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm, callback) {
	const request = {
		part: 'snippet',
		key: API_KEY,
		q: `${searchTerm}`,
	};
	$.getJSON(BASE_URL, request, callback);
	
	
};

// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(data) {
	console.log('hello this is decorate response');
	// const results = data.items.map((item, index) => renderResult(item));
	const createItem = data.items.map(function(item) {
		return {
			id : item.id.videoId,
			title : item.snippet.title,
			thumbnail : item.snippet.thumbnails.high.url,
		};
	});
	// console.log(createItem);
	
};

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function(video) {
	console.log('generateVideoItemHtml');
	return `
	<li>
		<span>${video.id}</span>
		<span>${video.title}</span>		
		<span>${video.thumbnail}</span>
	</li>
	`
	
};

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.items
// TEST IT!
const addVideosToStore = function(videos) {
	store.videos = videos; 
	console.log(store.videos);
	
};

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {
	const results = store.videos.map((item, index) => generateVideoItemHtml(item));
	// console.log(results);
	
	$('.results').html(results);
};

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function() {
	$('#js-search-form').submit(event => {
		event.preventDefault();
		console.log('Executing handle');
		// debugger;
		const searchTerm = $('#search-term').val();
		console.log(searchTerm);
		searchTerm.val("");
	}
	)
};

// When DOM is ready:
$(function () {
	// TASK:
	// 1. Run `handleFormSubmit` to bind the event listener to the DOM
	fetchVideos(sampleQuery, decorateResponse);
	// generateVideoItemHtml(mockData);
	addVideosToStore(mockData);
	render();
	handleFormSubmit();
});
