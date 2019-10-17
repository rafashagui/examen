function miArray() {
    var frases = [
        ['ole', '01.jpg'],
        ['jaja', '02.jpg'],
        ['gansta', '03.jpg'],
        ['adios', '04.jpg'],
        ['alfa', '05.jpg']
    ];
    var i = Math.floor(Math.random() * 4) - 1;
    document.getElementById('adios2').innerHTML = '<p class="col-6" >' + frases[i][0] + '</p><img class="col-6" style="width:100%;display:block" src="img/' + frases[i][1] + '">';


}


function aleotorio() {

    var randomColor = Math.floor(Math.random() * 444444);
    document.getElementById('hola2').style.backgroundColor = '#' + randomColor;
    var randomColor2 = Math.floor(Math.random() * 444444);
    document.getElementById('adios2').style.backgroundColor = '#' + randomColor2;

}

function color() {
    var frase = Math.floor(Math.random() * 444444);
    document.getElementById('adios').style.color = '#' + frase;
    var frase2 = Math.floor(Math.random() * 444444);
    document.getElementById('adios2').style.color = '#' + frase2;


}

function tamano() {
    var tamano = Math.floor(Math.random() * 100) + 10;
    document.getElementById('adios').style.fontSize = tamano + "px";

    var tamano2 = Math.floor(Math.random() * 100) + 10;
    document.getElementById('adios2').style.fontSize = tamano2 + "px";

}


function todo() {
    aleotorio();
    color();
    tamano();
    miArray()



}