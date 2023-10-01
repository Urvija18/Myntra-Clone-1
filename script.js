let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 3000); 
}
function myFunction() {
  var x = document.getElementById("demo");
  if (x.className.indexOf("section5") == -1) {
    x.className += "section5";
  } else {
    x.className = x.className.replace("section5", "");
  }
}