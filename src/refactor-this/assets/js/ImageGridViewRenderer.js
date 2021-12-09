function ImageGridViewRenderer() {}

ImageGridViewRenderer.prototype.render = function () {
  var nav =
   '<nav class="navbar navbar-expand-lg navbar-light bg-light">'
  +'  <a class="navbar-brand" href="#">Photo Sharing App</a>'
  +'  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">'
  +'    <span class="navbar-toggler-icon"></span>'
  +'  </button>'
  +'  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">'
  +'    <div class="navbar-nav">'
  +'      <a class="nav-link active" href="?nature">Nature <span class="sr-only">(current)</span></a>'
  +'      <a class="nav-link" href="?architecture">Architecture</a>'
  +'      <a class="nav-link" href="?fashion">Fashion</a>'
  +'    </div>'
  +'  </div>'
  +'</nav>'
 
  document.getElementById("main-view").innerHTML = nav

  var page = 1
  if (window.location.search.includes('page')) {
    page = Number(window.location.search.split('page=')[1])
  }

  if (window.location.search.includes('?nature')) {
    document.getElementById("main-view").innerHTML +=
     '<div class="container">'
    +'  <div id="nature-images" class="row row-cols-3"></div>'
    +'</div>'
    ImageDataGetter.getNatureImagesFromPage((page * 3) - 2)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("nature-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
    ImageDataGetter.getNatureImagesFromPage((page * 3) - 1)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("nature-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
    ImageDataGetter.getNatureImagesFromPage(page * 3)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("nature-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
  } else if (window.location.search.includes('?architecture')) {
    document.getElementById("main-view").innerHTML +=
     '<div class="container">'
    +'  <div id="architecture-images" class="row row-cols-3"></div>'
    +'</div>'
    ImageDataGetter.getArchitectureImagesFromPage((page * 3) - 2)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("architecture-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
    ImageDataGetter.getArchitectureImagesFromPage((page * 3) - 1)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("architecture-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
    ImageDataGetter.getArchitectureImagesFromPage(page * 3)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("architecture-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
  } else if (window.location.search.includes('?fashion')) {
    document.getElementById("main-view").innerHTML +=
     '<div class="container">'
    +'  <div id="fashion-images" class="row row-cols-3"></div>'
    +'</div>'
    ImageDataGetter.getFashionImagesFromPage((page * 3) - 2)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("fashion-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
    ImageDataGetter.getFashionImagesFromPage((page * 3) - 1)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("fashion-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
    ImageDataGetter.getFashionImagesFromPage(page * 3)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("fashion-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
  }

  var prevsearchstr = window.location.search.split('&page')[0] + '&page=' + (page - 1)
  var nextsearchstr = window.location.search.split('&page')[0] + '&page=' + (page + 1)
  var pagination =
   '<nav>'
  +'  <ul class="pagination">'
  +'    <li class="page-item"><a class="page-link" href="' + prevsearchstr + '">Previous</a></li>'
  +'    <li class="page-item"><a class="page-link" href="' + nextsearchstr + '">Next</a></li>'
  +'  </ul>'
  +'</nav>'

  document.getElementById("main-view").innerHTML += pagination
}
