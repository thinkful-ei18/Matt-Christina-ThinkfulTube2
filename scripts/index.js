const API_KEY = 'AIzaSyDbHRxDgCEttJI4x0R7drtclNmnaPVmzEE';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

const decorateResponse = function (data) {
  console.log('hello this is decorate response');
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

const addVideosToStore = function (videos) {
  console.log('add videos ran');
  store.videos = videos;
  VideoList.render();
};

$(function () {
  VideoList.bindEventListeners();
});