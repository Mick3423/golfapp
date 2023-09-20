import Dialog from "./dialog.js";

export default class Scoreboard {
    constructor() {
        this.total = 0
        const holes = document.querySelectorAll(".hole");
        holes.forEach((hole) => {
            const plusbutton = hole.querySelector('.plusButton')
            const minusbutton = hole.querySelector('.minusButton')
            const inputfield = hole.querySelector('.inputField')

            plusbutton.addEventListener('click', (e) => this.plus(inputfield))
            minusbutton.addEventListener('click', (e) => this.minus(inputfield))
        });


        this.resetButton = document.getElementById('resetButton');


        this.resetButton.addEventListener('click', () => this.reset())
    }

    plus(inputfield) {
        inputfield.value = parseInt(inputfield.value) + 1;
        this.total += 1;
        this.ialt();
    }

    minus(inputfield) {
        inputfield.value = parseInt(inputfield.value) -1 ;
        this.total -= 1;
        this.ialt();
    }

    ialt(){
        const total = document.getElementById('Totalscore');
        total.textContent = `i alt: ${this.total}`;
    }

    async reset() {
        const dialog = new Dialog();

        const confirm = await dialog.confirm();

        if(confirm){
            this.total = 0;
            const inputFields = document.querySelectorAll('.inputField');
            inputFields.forEach((inputfield) => {
                inputfield.value = 0;
            });

            this.ialt();
        }

    }


}