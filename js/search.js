var searchBtn = $('#searchMovie');

searchBtn.on('click', function(event) {
  var inputFld = $('#inputMovie').val();
  localStorage.setItem('title', inputFld);
  var title = localStorage.getItem('title');
  console.log(title);
  handleSearchBtn();
});


function handleSearchBtn() {
  console.log(localStorage.getItem('title'));
  var url = 'https://www.omdbapi.com/?&apikey=8ad4c53d&s=' + encodeURI(localStorage.getItem('title'));
  $.ajax({
    url: url,
    success: renderMovies
  });
};
handleSearchBtn();


function renderMovies(response) {
  console.log(response);
  var movieList = $('#mobileList');
  movieList.empty();
  for (var i in response.Search) {
    var movie = response.Search[i];
    var div = $('<div class="box-movie col-xs-6 col-md-4">');
    var img = $('<img  id="poster" src="' + movie.Poster + '" width="220px">');
    div.append(img);
    div.append('<br><span class="movietitle">' + movie.Title + '</span>');
    div.append('<br><button  data-imdb=' + movie.imdbID + ' data-poster=' + movie.Poster + ' data-year=' + movie.Year + '  data-Title=' + movie.Title + '  type="button" class="btn btn-fav btn-danger">Mi Favorito</button>');
    movieList.append(div);
  }
  // guardar las peliculas vistas por el usuario en firebase
  $('.btn-fav').click(function() {
    var imdbID = $(this).data('imdb');
    var titleMovie = $(this).data('title');
    var posterMovie = $(this).data('poster');
    var ratingMovie = $(this).data('year');
    console.log(imdbID);
    console.log(titleMovie);
    console.log(posterMovie);
    console.log(ratingMovie);
    firebase.auth().onAuthStateChanged(function(user) {
      var uid = user.uid;
      Addmoviesseen(imdbID, uid, titleMovie, posterMovie, ratingMovie);
      alert('Se ha añadido a su seccion favoritos');
    });
  });
}

function Addmoviesseen(imdbID, uid, titleMovie, posterMovie, ratingMovie) {
  console.log(uid);
  console.log(imdbID);
  console.log(titleMovie);
  console.log(posterMovie);
  console.log(ratingMovie);
  firebase.database().ref('Moviessen/' + uid + '/' + imdbID).set({
    Title: titleMovie,
    posterMovie: posterMovie,
    ratingImdb: ratingMovie
  });
}