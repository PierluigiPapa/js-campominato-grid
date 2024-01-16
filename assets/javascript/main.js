//Costante per stabilire il livello di difficoltà
const levelHtml = document.getElementById ('level')
//Costante per attivare il gioco attraverso il bottone play
const buttonHmtl = document.querySelector ('.play')
//Costante per attivare la griglia
const grigliaHtml = document.getElementById('grill')

buttonHmtl.addEventListener('click', inizioGioco);

function selectedSquareChangeColor(){
    this.classList.add('box-selected-color');

    console.log(this.innerHTML)
}

function inizioGioco() {
    
    grigliaHtml.innerHTML = '';
    if(level.value == 'easy') {
        for (let i = 1; i <= 100; i++) {
            let box = document.createElement("div");
            box.classList.add("box-easy");
            grigliaHtml.append(box);
            box.innerHTML = i;

            box.addEventListener('click', selectedSquareChangeColor);
        }

    }else if (level.value == 'medium') {
        for (let i = 1; i <= 81; i++) {
            let box = document.createElement("div");
            box.classList.add("box-medium");
            grigliaHtml.append(box);
            box.innerHTML = i;

            box.addEventListener('click', selectedSquareChangeColor);
        }
    }else if (level.value == 'hard') {
        for (let i = 1; i <= 49; i++) {
            let box = document.createElement("div");
            box.classList.add("box-hard");
            grigliaHtml.append(box);
            box.innerHTML = i;

            box.addEventListener('click', selectedSquareChangeColor);
        }
    }
}