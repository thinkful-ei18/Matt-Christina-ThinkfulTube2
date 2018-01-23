/**
 * QUESTIONS: 
 *  Does .getJSON return its own data? Answered
 */

const API_KEY = 'AIzaSyDbHRxDgCEttJI4x0R7drtclNmnaPVmzEE';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
// const fetchVideos = function(searchTerm, callback) {
//   //debugger;
// 	const request = {
// 		part: 'snippet',
// 		key: API_KEY,
// 		q: `${searchTerm}`,
// 	};
// 	$.getJSON(BASE_URL, request, callback);

// };


const decorateResponse = function (data) {
  console.log('hello this is decorate response');
  // const results = data.items.map((item, index) => renderResult(item));
  const videos = data.items.map(function (item) {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
    };
  });
  addVideosToStore(videos);
  // console.log(createItem);

};


// const generateVideoItemHtml = function (video) {
//   console.log('generateVideoItemHtml');
//   //	<span>${video.id}</span>
//   return `
// 	<li>
// 		<h2>${video.title}</h2>		
// 		<img src = ${video.thumbnail}></image>
// 	</li>
// 	`
// };

const addVideosToStore = function (videos) {
  console.log('add videos ran');
  store.videos = videos;
  VideoList.render();
};


// const render = function () {
//   //debugger;
//   console.log('inside render', store);
//   const results = store.videos.map((item, index) => VideoList.generateListItem(item));
//   $('.results').html(results);
//   console.log('render html');
// };


// const handleFormSubmit = function () {
//   $('#js-search-form').submit(event => {
//     event.preventDefault();
//     console.log('Executing handle');
//     // debugger;
//     const searchQuery = $(event.currentTarget).find('.search-term');
//     const searchTerm = searchQuery.val();
//     console.log(searchTerm);
//     searchQuery.val("");
//     api.fetchVideos(searchTerm, decorateResponse);
//   })
// };

$(function () {
  VideoList.bindEventListeners();
});

