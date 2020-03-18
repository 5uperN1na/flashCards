const MAX = 800;
let container = document.getElementById('container');
//create global array
let array = [];

class Card {
    constructor(size) {
        this.div = document.createElement('div');

        //add div to the 'card' class
        this.div.classList.add('card');
        this.div.style.width = `${size}px`;
        this.div.style.height = `${size}px`;
        //this.div.addEventListener('click', () => {
           // this.updateColor();
            //this.updateLocation();
       // })
        
        this.updateColor();
        
        container.appendChild(this.div);
    }

  
    
    updateColor() {
       let randomColor = `rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)})`
        this.div.style.backgroundColor = randomColor;
    }
}

let generateButton = document.getElementById('button');
generateButton.addEventListener('click', insertCard);


function insertCard() {
    let size = randomVal (500, 500);
    let card = new Card(size);
}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}
