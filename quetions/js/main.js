
{/* <div class="test">
    <h3 class="test__title">HTML расшифровывается как HyperText Marketing Language?</h3>
    <label class="test__label">
        Да
        <input name="test__2" type="radio" class="test__select">
    </label>
    <label class="test__label">
        Нет
        <input name="test__2" type="radio" class="test__select">
    </label>
</div> */}


class Test {
    constructor() {
        this.create('html');
        this.create('css');
        this.create('js');
    }

    show(category) {
        this.hide()
        this.category = category;
        questions[this.category].style.display = 'block';
    }

    showRes(category) {
        this.category = category;
        this.activeBlock = document.getElementsByClassName(this.category)[0];
        this.testSelect = this.activeBlock.getElementsByClassName('test__select');

        this.res = 0;
        this.allInputsValue = [] // ['yes', 'none', 'none', 'yes'] 10

        for (let i = 0; i < this.testSelect.length; i++) {
            if (this.testSelect[i].checked) {
                this.allInputsValue.push(this.testSelect[i].value)
            } 
        }

        for (let i = 0; i < DB[this.category].length; i++) {
            if (DB[this.category][i]['rightAnswer'] == this.allInputsValue[i]) {
                this.res++;
            } 
        }

        console.log(this.res)
        this.activeBlock.getElementsByClassName('result__num')[0].textContent = this.res + ' ';
        
    }

    hide () {
        questions.html.style.display = 'none';
        questions.css.style.display = 'none';
        questions.js.style.display = 'none';

    }

    create(category) {
        this.category = category;

        for (let i = 0; i < DB[this.category].length; i++) {

        let newTest = document.createElement('div');
        newTest.classList.add('test');

        let newTitle = document.createElement('h3');
        newTitle.classList.add('test__title');
        newTitle.textContent = DB[this.category][i]['quiz'];

        let newLabel1 = document.createElement('label');
        newLabel1.classList.add('test__label');

        let newTextYes = document.createElement('span');
        newTextYes.classList.add('test__text');
        newTextYes.textContent = DB[this.category][i]['answers'][0];

        let newInputYes = document.createElement('input');
        newInputYes.classList.add('test__select');
        newInputYes.type = 'radio';
        newInputYes.name =`test__${this.category}__${i}`;
        newInputYes.value = DB[this.category][i]['answers'][0];
        // newInputYes.checked = "checked";

        let newLabel2 = document.createElement('label');
        newLabel2.classList.add('test__label');

        let newTextNo = document.createElement('span');
        newTextNo.classList.add('test__text');
        newTextNo.textContent = DB[this.category][i]['answers'][1];

        let newInputNo = document.createElement('input');
        newInputNo.classList.add('test__select');
        newInputNo.type = 'radio';
        newInputNo.name =`test__${this.category}__${i}`;
        newInputNo.value = DB[this.category][i]['answers'][1];

        let newInputHiden = document.createElement('input');
        newInputHiden.classList.add('test__select');
        newInputHiden.classList.add('hide');
        newInputHiden.type = 'radio';
        newInputHiden.name =`test__${this.category}__${i}`;
        newInputHiden.value = 'none'
        newInputHiden.checked = 'checked'



        newTest.appendChild(newTitle);

        newLabel1.appendChild(newTextYes);
        newLabel1.appendChild(newInputYes);
        newTest.appendChild(newLabel1);

        newLabel2.appendChild(newTextNo);
        newLabel2.appendChild(newInputNo);
        newTest.appendChild(newLabel2);

        newTest.appendChild(newInputHiden);
       
        document.getElementsByClassName(`ask__container-${this.category}`)[0].appendChild(newTest);
    }



    }
    
    check() {

    }

    mistake() {

    }


}

let test = new Test();


selectCategory.html.addEventListener('click', () => {test.show('html')});
selectCategory.css.addEventListener('click', () => {test.show('css')});
selectCategory.js.addEventListener('click', () => {test.show('js')});


resBtns.html.addEventListener('click', () => {test.showRes('html')});
resBtns.css.addEventListener('click', () => {test.showRes('css')});
resBtns.js.addEventListener('click', () => {test.showRes('js')});
