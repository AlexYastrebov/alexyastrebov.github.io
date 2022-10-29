class Notate {
    constructor() {
        this.createIcons();
        if (this.getStorage() == null) {
            localStorage.setItem('notates', JSON.stringify([]));
        }

    }
    create(title, text, img){

        this.title = title;
        this.text = text;
        this.img = img;
        

        let newNotate = document.createElement('div');
        newNotate.classList.add('notate');

        let newImg = document.createElement('img');
        newImg.classList.add('notate__img');
        newImg.src = img;
        

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

        newBtnDelete.addEventListener('click', (e)=> {
            let deleteEl = e.target.parentElement;
            notates.parent.removeChild(deleteEl)
        })


        newNotate.appendChild(newImg)
        newNotate.appendChild(newTitle)
        newNotate.appendChild(newText)
        newNotate.appendChild(newBtnEdit)

        newNotate.appendChild(newBtnDelete)

        notates.parent.appendChild(newNotate);


    }
    save(){
        this.create(form.title.value, form.text.value, form.img.src);
        this.saveStorage(form.title.value, form.text.value, form.img.src);
        this.resetForm();
    }

    resetForm(){
        form.title.value = '';
        form.text.value = '';
        form.img.src = "/images/bx_add-to-queue.svg";
        add.style.display = 'none';
    }

    saveStorage(title, text, img){
        this.data = JSON.parse(this.getStorage());
        this.title = title;
        this.text = text;
        this.img = img;
        this.data.push([this.title , this.text, this.img])
        localStorage.setItem('notates', JSON.stringify(this.data));
    }
    getStorage(){
        return localStorage.getItem('notates');
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
        this.editTitle.contentEditable = "false";
        this.editText.contentEditable = "false";
        this.btn.dataset.edit = 'false';
    }
    edit(e){
        this.e = e;
        this.e.target.dataset.edit = 'true';
        this.editTitle = (this.e.target.parentElement).getElementsByClassName('notate__title')[0];
        this.editText = (this.e.target.parentElement).getElementsByClassName('notate__text')[0];
        
        this.editTitle.contentEditable = "true";
        this.editText.contentEditable = "true";
        this.editTitle.focus();

        this.changeBtnEdit(this.e.target);
    }
    delete(){
    }
    changeBtnEdit(btn) {
        this.btn = btn;
        this.btn.style.background = 'green';
        this.btn.textContent = 'save';

    }

    createIcons() {
        // <img class="add__img" src="/images/img-add/icon1.svg"></img>
        for (let i = 0; i < dbIcons.length; i++) {
            let icon = document.createElement('img');
            icon.classList.add('add__img');
            icon.src = `/images/img-add/${dbIcons[i]}`;
            add.appendChild(icon)
            
            icon.addEventListener('click', (e)=> {
                form.img.src = e.target.src;
            })

        }
        
    }
}

let notate = new Notate();
form.btn.addEventListener('click', ()=> {notate.save()})
form.img.addEventListener('click', ()=> {
    add.style.display = 'block';
})






