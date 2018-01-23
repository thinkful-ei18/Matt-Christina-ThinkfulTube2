
const api = (function() {
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  
  return {
    fetchVideos : function (searchTerm, callback) {
      //debugger;
      const request = {
        part: 'snippet',
        key: API_KEY,
        q: `${searchTerm}`,
      };
      $.getJSON(BASE_URL, request, callback);
    }
  }
}())