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
        newImg.src ='/images/emojione_bird-logo.svg';
        // как сделать фото как лого?

        let newTitle = document.createElement('h2');
        newTitle.classList.add('notate__title');
        newTitle.textContent = this.title;

        let newText = document.createElement('p');
        newText.classList.add('notate__text');
        newText.textContent = this.text;

        let newBtnEdit = document.createElement('button');
        newBtnEdit.classList.add('notate__btn');
        newBtnEdit.textContent = 'Edit';
        newBtnEdit.dataset.edit = 'false';

        newBtnEdit.addEventListener('click', (e) => {this.toggleEdit(e)})


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
    toggleEdit(e) {
        this.e = e;
        if (this.e.target.dataset.edit == 'false') {
            this.edit(e);

        } else {
            this.saveEdit(e);
        }
    }
    saveEdit(btn) {
        this.btn = btn.target;
        this.btn.style.background = 'gray';
        this.btn.textContent = 'edit';
    }
    edit(e){
        this.e = e;
        this.e.target.dataset.edit = 'true';
        this.editTitle = (this.e.target.parentElement).getElementsByClassName('notate__title')[0];
        this.editText = (this.e.target.parentElement).getElementsByClassName('notate__text')[0];
        
        this.editTitle.contentEditable = "true";
        this.editText.contentEditable = "true";
        this.editTitle.focus();
        this.editTitle.select();

        this.changeBtnEdit(this.e.target);
    }
    delete(){
    }
    changeBtnEdit(btn) {
        this.btn = btn;
        this.btn.style.background = 'green';
        this.btn.textContent = 'save';

    }
}

let notate = new Notate();
form.btn.addEventListener('click', ()=> {notate.save()})