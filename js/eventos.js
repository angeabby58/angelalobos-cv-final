


document.getElementById('buton').addEventListener('click', function () {
    console.log ("evento de javascript");
    document.getElementById("demo").innerHTML="Primer evento de JavaScrip funcionando";

})

//htmlcolorcodes
document.getElementById('buton_color').addEventListener('click', function () {
    document.getElementById('prueba').style.backgroundColor = '#FF66CC';

})

document.getElementById('buton_default').addEventListener('click', function () {
    document.getElementById('prueba').style.backgroundColor = '#8a2be2';

})

document.getElementById('buton_ocultar').addEventListener('click', function () {
    document.getElementById('demo').style.display='none';

})



//no me sale
function displayDate() {
  document.getElementById("hora").innerHTML = Date();
}
