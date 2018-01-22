jQuery(document).ready(function() {
  var $imageUser = $('#img-user');
  var $nameUser = $('#name-user');

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      console.log(displayName);
      var photoURL = user.photoURL;
      var uid = user.uid;
      var providerData = user.providerData;
      $imageUser.attr('src', photoURL);
      $nameUser.text(displayName);
      // ...
    } else {
      // User is signed out.
      console.log('No ha iniciado sesion');
    }
  });
  $('.oculto').hide();

  $('.inf').click(function() {
    var nodo = $(this).attr('href');
    if ($(nodo).is(':visible')) {
      $(nodo).hide();
      return false;
    } else {
      $('.oculto').hide('slow');
      $(nodo).fadeToggle('fast');
      return false;
    }
  });

  function viewFavorites() {
    firebase.auth().onAuthStateChanged(function(user) {
      firebase.database().ref('/Moviessen/' + user.uid).on('child_added', function(snapshot) {
        var html = '';
        var key = snapshot.key;
        var title = snapshot.val().Title;
        var posterMovie = snapshot.val().posterMovie;

        console.log(user.uid);
        console.log(posterMovie);
        html += '<div class="col-xs-6 col-md-4">' +
      '<img class="responsive-img movie-img" id="img-movie" src=' + posterMovie + ' alt="">' +
      '</div>';
        $('#posterMovie').append(html);
      });
    });
  };
  viewFavorites();
});
