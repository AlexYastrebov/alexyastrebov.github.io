class Notate {
    constructor() {

    }
    create(title, text, img){

        this.title = title;
        this.text = text;
        this.img = img;

        let newNotate = document.createElement('div');
        newNotate.classList.add('notate');

        let newImg = document.createElement('img');
        newImg.classList.add('notate__img');
        newImg.src = this.img;

        let newTitle = document.createElement('h2');
        newTitle.classList.add('notate__title');
        newTitle.textContent = this.title;

        let newText = document.createElement('p');
        newText.classList.add('notate__text');
        newText.textContent = this.text;

        let newBtnEdit = document.createElement('button');
        newBtnEdit.classList.add('notate__btn');
        newBtnEdit.textContent = 'Edit';

        let newBtnDelete = document.createElement('button');
        newBtnDelete.classList.add('notate__btn');
        newBtnDelete.textContent = 'Delete';


        newNotate.appendChild(newImg)
        newNotate.appendChild(newTitle)
        newNotate.appendChild(newText)
        newNotate.appendChild(newBtnEdit)

        newNotate.appendChild(newBtnDelete)

        notates.parent.appendChild(newNotate);
    }
    save(){
        this.create(form.title.value, form.text.value, form.img.value)
    }
    edit(){

    }
    delete(){

    }
}

let notate = new Notate();
form.btn.addEventListener('click', ()=> {notate.save()})