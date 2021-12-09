function ImageDataGetter() {}

ImageDataGetter.getNatureImages = function () {
  var images = []
  return fetch('http://localhost:8888/images?category=nature')
    .then(function (response) {
      return response.json()
    })
    .then(function (result) {
      images = result
      return images
    })
}

ImageDataGetter.getArchitectureImages = function () {
  var images = []
  return fetch('http://localhost:8888/images?category=architecture')
    .then(function (response) {
      return response.json()
    })
    .then(function (result) {
      images = result
      return images
    })
}

ImageDataGetter.getFashionImages = function () {
  var images = []
  return fetch('http://localhost:8888/images?category=fashion')
    .then(function (response) {
      return response.json()
    })
    .then(function (result) {
      images = result
      return images
    })
}

ImageDataGetter.getNatureImagesFromPage = function (page) {
  var images = []
  return fetch('http://localhost:8888/images?category=nature&page=' + page)
    .then(function (response) {
      return response.json()
    })
    .then(function (result) {
      images = result
      return images
    })
}

ImageDataGetter.getArchitectureImagesFromPage = function (page) {
  var images = []
  return fetch('http://localhost:8888/images?category=architecture&page=' + page)
    .then(function (response) {
      return response.json()
    })
    .then(function (result) {
      images = result
      return images
    })
}

ImageDataGetter.getFashionImagesFromPage = function (page) {
  var images = []
  return fetch('http://localhost:8888/images?category=fashion&page=' + page)
    .then(function (response) {
      return response.json()
    })
    .then(function (result) {
      images = result
      return images
    })
}
