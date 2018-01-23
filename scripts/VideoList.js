const VideoList = (function () {
  return {
    generateListItem : function (video) {
      console.log('generateListItem');
      //	<span>${video.id}</span>
      return `
      <li>
        <h2>${video.title}</h2>		
        <img src = ${video.thumbnail}></image>
      </li>
      `
    },

    render : function () {
      console.log('inside render', store);
      const results = store.videos.map((item, index) => VideoList.generateListItem(item));
      $('.results').html(results);
      console.log('render html');
    },

    handleFormSubmit : function () {
      $('#js-search-form').submit(event => {
        event.preventDefault();
        console.log('Executing handle');
        // debugger;
        const searchQuery = $(event.currentTarget).find('.search-term');
        const searchTerm = searchQuery.val();
        console.log(searchTerm);
        searchQuery.val("");
        api.fetchVideos(searchTerm, decorateResponse);
      })
    },

    bindEventListeners : function () {
      this.handleFormSubmit();
    },
  }
}())

// const generateListItem = function (video) {
//   console.log('generateListItem');
//   //	<span>${video.id}</span>
//   return `
// 	<li>
// 		<h2>${video.title}</h2>		
// 		<img src = ${video.thumbnail}></image>
// 	</li>
// 	`
// };