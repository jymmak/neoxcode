(function() {
  init();
  function init() {
    var inputFld = $('#titleFld');
    var searchBtn = $('#searchBtn');
    searchBtn.click(handleSearchBtn);
    function handleSearchBtn() {
      var title = inputFld.val();
      console.log(title);
      var url = 'https://www.omdbapi.com/?&apikey=8ad4c53d&s=' + encodeURI(title) ;
      $.ajax({
        url: url,
        success: renderMovies
      });
    };
  }
  function renderMovies(response) {
    console.log(response);
    var movieList = $('#mobileList');
    
    movieList.empty();
    for (var i in response.Search) {
      var movie = response.Search[i];
      var li = $('<li class="list-group-item">');
      var span = $('<span>');
      var img = $('<img  id="poster" src="' + movie.Poster + '" width="120px">'); 
      li.append(img);
      li.append('<span>' + movie.Title + '</span>');
      span.append('<span>' + movie.imdbID + '</span>');
      span.append('<span>' + movie.Year + '</span>');
      li.append('<button  data-imdb=' + movie.imdbID + ' data-poster=' + movie.Poster + ' data-year=' + movie.Year + '  data-Title=' + movie.Title + '  type="button" class="btn btn-fav btn-danger">favoritos</button>');
      movieList.append(li);
      movieList.append(span);
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
    
  var searchBtn = $('#searchBtn');

  searchBtn.on('click', function(event) {
    var inputFld = $('#titleFld').val();
    localStorage.setItem('title', inputFld);
    var title = localStorage.getItem('title');
    console.log(title);
    window.location.href = 'movies.html';
  });
})();
