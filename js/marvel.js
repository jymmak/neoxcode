const privateKey = 'b6e70892a136224b29536bdc712008ee40b2cea4', publicKey = 'ef09d8f0880469e7e8d437f84f49abbd';

var content = $('#content');

// ancors callback event
var search = $('#search');
var comics = $('#comics');
var series = $('#series');
var event = $('#event');
var stories = $('#stories');
var movie = $('#movie');
var creators = $('#creators');
var personaje = $('#personaje');

function getHero() {
  content.html('');
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);
  const URL = 'https://gateway.marvel.com/v1/public/characters?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
  fetch(URL)
    .then(response => response.json())
    .then(response => {
      var info = response.data.results; // array con todo los datos de los personajes
      console.log(info);
      var nameHero = $.map(info, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
      });
      info.forEach(e => {
        showHero(e);
      });
      for (let value of info) { // Array con los datos de cada personaje
        infoHero = value;
      }
    })
    .catch(function(e) {
      alert(e);
    });
}

function getComics() {
  content.html('');
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);

  const URL = 'https://gateway.marvel.com/v1/public/comics?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
  fetch(URL)
    .then(response => response.json())
    .then(response => {
      var info = response.data.results; // array con todo los datos de los comics
      console.log(info);
      info.forEach(e => {
        console.log(e);
        console.log(e);
        showComics(e);
      });
    })
    .catch(function(e) {
      alert(e);
    });
}

function getCreators() {
  // content.html('');
  // var movie =
  // fetch('http://www.omdbapi.com/?s=hulk&page=2&apikey=8ad4c53d')
  // .then(Response=>Response.json())
  // .then(lugares =>{
  //   console.log(lugares)
  // })
  content.html('');
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);
  const URL = 'https://gateway.marvel.com/v1/public/creators?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
  fetch(URL)
    .then(response => response.json())
    .then(response => {
      var info = response.data.results; // array con todo los datos de los personajes
      console.log(info);
      info.forEach(e => {
        console.log(e);
        showCreators(e);
      });
    })
    .catch(function(e) {
      alert(e);
    });
}


function getEvents() {
  content.html('');
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);
  const URL = 'https://gateway.marvel.com/v1/public/events?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
  fetch(URL)
    .then(response => response.json())
    .then(response => {
      var info = response.data.results; // array con todo los datos de los eventos
      console.log(info);
      info.forEach(e => {
        showEvents(e);
      });
    })
    .catch(function(e) {
      alert(e);
    });
}

function getSeries() {
  content.html('');
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);
  const URL = 'https://gateway.marvel.com/v1/public/series?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
  fetch(URL)
    .then(response => response.json())
    .then(response => {
      var info = response.data.results; // array con todo los datos de los eventos
      console.log(info);
      info.forEach(e => {
        showSeries(e);
      });
    })
    .catch(function(e) {
      alert(e);
    });
}

function getStories() {
  content.html('');
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);
  const URL = 'https://gateway.marvel.com/v1/public/stories?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
  fetch(URL)
    .then(response => response.json())
    .then(response => {
      var info = response.data.results; // array con todo los datos de los eventos
      console.log(info);
      info.forEach(e => {
        showStories(e);
      });
    })
    .catch(function(e) {
      alert(e);
    });
}

function showStories(e) {
  var nameCharacters = $.map(e.characters.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameComics = $.map(e.comics.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameCreators = $.map(e.creators.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameEvents = $.map(e.events.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameOrigin = $.map(e.originalIssue.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameSeries = $.map(e.series.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });

  var hero =

                    `<div class="ed-container back-categories center-all ed-item s-60">
                    <div class="ed-item s-100">
                          <h3 class="title"> ${ e.type }</h3>
                          <p ><b>TIPO</b> :  ${e.title }</p>
                          <p ><b>N° COMICS </b>:  ${ e.comics.available}</p>
                          <p ><b>NOMBRE COMICS</b> :  ${nameComics}</p>
                          <p ><b>N° PERSONAJES </b>: ${e.characters.available}  </p>
                          <p ><b>PERSONAJES</b> :  ${nameCharacters} </p>
                          <p ><b>N° DE CREADORES</b> :  ${e.creators.available}</p>
                          <p ><b>NOMBRES CREADORES</b> :  ${nameCreators}</p>
                          <p ><b>N° DE SERIE</b> :  ${e.series.available}</p>
                          <p ><b>NOMBRES SERIE<b>:  ${nameSeries}</p>
                          <p ><b>N° DE EVENTOS</b> :  ${e.events.available }</p>
                          <p ><b>NOMBRES EVENTOS</b>:  ${nameEvents}</p>
                          <p ><b>N° DE originalIssue</b> :  ${e.originalIssue.available }</p>
                          <p >NOMBRES originalIssue</b>:  ${nameOrigin}</p>
                    </div>
                    </div>`;


  content.append(hero);
}

function showSeries(e) {
  var nameEvents = $.map(e.events.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameComics = $.map(e.comics.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameCreators = $.map(e.creators.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameStories = $.map(e.stories.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var img = e.thumbnail.path + '/portrait_uncanny.' + e.thumbnail.extension;
  var hero =

        `<div class="ed-container back-categories">
        <div class="ed-item s-50">
            <img src="${img}" alt="" class="img_categories">
          </div>
          <div class="ed-item s-50">
               <h3 class="title"> ${e.title}</h3>
                <p ><b>DURACIÓN</b> : ${e.startYear}  </p>
                <p ><b>TIPO</b> :  ${e.type} </p>
                <p ><b>EDITADO</b>:  ${e.modified}</p>
                <p ><b>N ° EVENTOS</b>:  ${e.events.available}</p>
                <p ><b>NOMBRES HISTORIETAS </b>:  ${nameStories}</p>
                <p ><b>N° DE COMICS</b>:  ${e.comics.available}</p>
                <p ><b>N° DE CREADORES</b>:  ${e.creators.available}</p>
        </div>
        </div>`;


  content.append(hero);
}


function showEvents(e) {
  console.log(e);
  var nameCharacters = $.map(e.characters.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameComics = $.map(e.comics.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameCreators = $.map(e.creators.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameStories = $.map(e.stories.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameSeries = $.map(e.series.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var img = e.thumbnail.path + '/portrait_uncanny.' + e.thumbnail.extension;
  var hero =
            `<div class="ed-container back-categories">
                   <div class="ed-item s-50">
                       <img src="${img}" alt="" class="img_categories">
                     </div>
                     <div class="ed-item s-50">
                     <h3 class="title"> ${ e.title }</h3>
                           <p ><b>N° COMICS </b>:  ${e.description}</p>
                           <p ><b>N° PERSONAJES </b>: ${e.characters.available}  </p>
                           <p ><b>PERSONAJES </b>:  ${nameCharacters} </p>
                           <p ><b>N° HISTORIETAS</b>:  ${e.stories.available}</p>
                           <p ><b>NOMBRE HISTORIETAS</b> :  ${nameStories}</p>
                           <p ><b>N° COMICS</b> :  ${ e.comics.available}</p>
                           <p ><b>NOMBRE COMICS </b>:  ${nameComics}</p>
                           <p ><b>N° DE CREADORES</b> :  ${e.creators.available}</p>
                           <p ><b>NOMBRES CREADORES</b> :  ${nameCreators}</p>
                           <p ><b>N° DE SERIE </b>:  ${e.series.available}</p>
                           <p ><b>NOMBRES SERIE</b>:  ${nameSeries}</p>
                   </div>
                   </div>`;

  content.append(hero);
}

function showCreators(e) {
  var nameEvents = $.map(e.events.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameComics = $.map(e.comics.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameSeries = $.map(e.series.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.type;
  });
  var nameStories = $.map(e.stories.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.type;
  });
  var hero =
                  '<div class="ed-item s-1-3 back-categories">' +
                  '<h3 class="title">' + e.firstName + '</h3>' +
                  '<div class="">' +
                  '<p ><b>N° DE COMICS</b> : ' + e.comics.available + '</p>' +
                  '<p ><b>NOMBRE DE COMICS</b>: ' + nameComics + '</p>' +
                  '<p ><b>N °DE EVENTOS </b>: ' + e.events.available + '</p>' +
                  '<p ><b>NOMBRE DE EVENTOS</b>: ' + nameEvents + '</p>' +
                  '<p ><b>N° DE SERIES</b> : ' + e.series.available + '</p>' +
                  '<p ><b>NOMBRE DE SERIES</b>: ' + nameSeries + '</p>' +
                  '<p ><b>N° DE HISTORIETAS</b> : ' + e.stories.available + '</p>' +
                  '<p ><b>NOMBRE DE HISTORIETAS</b>: ' + nameStories + '</p>' +
                  '</div>' +
                  '</div>';


  content.append(hero);
}


function showHero(e) {
  var nameEvents = $.map(e.events.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameStories = $.map(e.stories.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameSeries = $.map(e.series.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameComics = $.map(e.comics.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var img = e.thumbnail.path + '/portrait_uncanny.' + e.thumbnail.extension;
  var hero =

                  `<div class="ed-container border back-categories">
                  <div class="ed-item s-50 img_categories ${e.id}">
                      <img src="${img}" alt="" >
                    </div>
                   
                  </div>
                  
                  <div class="modal fade" id="a${e.id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                        </div>
                        <div class="modal-body">
                        <h3 class="title"> ${e.name } </h3>
                        <p ><b>ULTIMA ACTUALIZACION</b> : ${e.modified}  </p>
                        <p ><b>EVENTOS PARTICIPADOS</b> :  ${ e.events.available} </p>
                        <p ><b>NOMBRE DEL EVENTO PARTICIPADO</b>: ${nameEvents}</p>
                        <p ><b>N° HISTORIETAS</b> :  ${e.stories.available}</p>
                        <p ><b>N° DE SERIE </b>:  ${e.series.available}</p>
                        <p ><b>NOMBRES SERIES</b>:  ${nameSeries}</p>
                        <p ><b>N° COMICS</b> :  ${e.comics.available }</p>
                        <p ><b>NOMBRES COMICS</b>:  ${nameComics }</p>                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>`;


  content.append(hero);
  boxpersonaje=$('.' + e.id);
boxpersonaje.on('click',hola)

function hola(){
  $('#a'+ e.id).modal('show')           
};
}


function showComics(e) {
  var nameEvents = $.map(e.events.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var nameStories = $.map(e.stories.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.name;
  });
  var typeStories = $.map(e.stories.items, function(val, i) { // Array con los nombres de heroes para la busqueda de restauranets
    return val.type;
  });
  var img = e.thumbnail.path + '/portrait_uncanny.' + e.thumbnail.extension;
  var hero =

                  `<div class="ed-container back-categories">
                  <div class="ed-item s-50">
                      <img src="${img}" alt="" class="img_categories">
                    </div>
                    <div class="ed-item s-50">
                           <p ><b>DESCRIPCION</b> :  ${e.description}</p>
                          <p ><b>ULTIMA ACTUALIZACION</b> : ${e.modified}  </p>
                          <p ><b>CANTIDAD DE PAGINAS</b> :  ${e.pageCount} </p>
                          <p ><b>FORMATO</b>:  ${e.format}</p>
                          <p ><b>EVENTOS PARTICIPADOS</b> :  ${e.events.available}</p>
                          <p ><b>NOMBRE DEL EVENTO PARTICIPADO </b>:  ${nameEvents}</p>
                          <p ><b>N° DE SERIE</b> :  ${e.stories.available}</p>
                          <p ><b>NOMBRES HISTORIETAS</b>:  ${nameStories}</p>
                          <p ><b>TIPOS DE HISTORIETAS</b>:  ${typeStories}</p>
                  </div>
                  </div>`;


  content.append(hero);
}

personaje.on('click', getHero);
comics.on('click', getComics);
event.on('click', getEvents);
creators.on('click', getCreators);
series.on('click', getSeries);
stories.on('click', getStories);
// movie.on('click', getMovie);
// search.on('click', getSearch);
