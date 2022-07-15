function searchPhotos() {
  let clientId= "fFl-8g18pV1EPm89Prkk7NDVP6XUm84ptQ385IDFTpc";
  let query = document.getElementById('search').value;
  let url = "https://api.unsplash.com/search/photos/?client_id="+ clientId +"&query=" + query;

  fetch(url) 
    .then(function(data){
      return data.json();
    })
    .then(function(data){
      console.log(data);

      data.results.forEach(photo => {
        let result = `
        <img src=${photo.urls.regular}">
        `;
        $('#result').html(result);
      });
      
    })
}