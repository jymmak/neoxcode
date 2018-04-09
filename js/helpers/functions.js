jQuery(document).ready(function() {
  function sessionActive() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('sesion activa');
      } else {
        location.href = '../index.html';
      }
    });
  }


  sessionActive();

  var $imageUser = $('#userphoto');

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var photoURL = user.photoURL;
      $imageUser.attr('src', photoURL);
      // ...
    } else {
      // User is signed out.
      console.log('No ha iniciado sesion');
    }
  });
});