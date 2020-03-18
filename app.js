
const MAX = 800;
let container = document.getElementById('container');

//create object
class Card {
    constructor(size) {
        this.div = document.createElement('div');
        this.div = classList.add('card');
        this.div = style.width`${size} px`;
        this.div = style.height`${height}px`;
        /*
        this.div.addEventListener('click', () => {
            this.getAnswer();

        })
        */
        container.appendChild(this.div);

    }
/*
    getAnswer() {

    }
*/

}

let button = document.getElementById('button');
button.addEventListener('click', getCard);

function getCard() {

    let size = getValues(25, 100);
    let card = new Card(size);


}

function getValues(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
}