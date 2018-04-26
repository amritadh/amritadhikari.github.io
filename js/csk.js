document.getElementById("file").addEventListener("click", showFile);

function showFile() {

  document.getElementById("downward").classList.toggle("active");
}
document.getElementById("stat").addEventListener("click", myStery);

function myStery() {

  document.getElementById("mode").classList.toggle("active");
}
document.getElementById("median").addEventListener("click", myfunction);

function myfunction() {


  document.getElementById("mean").classList.toggle("active");
}
