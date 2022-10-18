// 3 фильтра по 6 чекбоксов

// Типа товары 18



let maslo = document.getElementsByClassName('calk__maslo')[0];
let filtr = document.getElementsByClassName('calk__filtr')[0];
let remen = document.getElementsByClassName('calk__remen')[0];
let stupica = document.getElementsByClassName('calk__stupica')[0];
let mojka = document.getElementsByClassName('calk__mojka')[0];
let polirovka = document.getElementsByClassName('calk__polirovka')[0];
let dostavka = document.getElementsByClassName('calk__dostavka')[0];
let btnsum = document.getElementsByClassName('calk__sumBtn')[0];
let oplata = document.getElementsByClassName('oplata');
let klient = document.getElementsByClassName('klient')[0];
let numberZakaz = document.getElementsByClassName('calk__number')[0];
let klientFamily = document.getElementsByClassName('calk__family')[0];
let KlientName = document.getElementsByClassName('calk__name')[0];
let klientAuto = document.getElementsByClassName('calk__auto')[0];
let dateZakaz = document.getElementsByClassName('calk__date')[0];
let klientNumber = document.getElementsByClassName('klient__number')[0];
let klientFamily2 = document.getElementsByClassName('klient__family')[0];
let KlientName2 = document.getElementsByClassName('klient__name')[0];
let klientAuto2 = document.getElementsByClassName('klient__auto')[0];
let klientDate = document.getElementsByClassName('klient__date')[0];
let zapisKient = document.getElementsByClassName('calk__sendBtn')[0];
let zapisPrintBtn = document.getElementsByClassName('klient__printBtn')[0];
let zapisDeliteBtn = document.getElementsByClassName('klient__deliteBtn')[0];
let headerPrint = document.getElementsByClassName('header__print')[0];
let headerPrintBtnOk = document.getElementsByClassName('header__printBtnOk')[0];
let headerSave = document.getElementsByClassName('header__save')[0];
let klientText = document.getElementsByClassName('klient__text');




// let calc = {
//     family: document.getElementsByClassName('calk__family')[0]
// }

// let klient_ = {
//     family: document.getElementsByClassName('klient__family')[0]
// }
// calc.family
// klient_.family

let sum = 0;
let dos = 0;
let clining = 0;

function res() {
    sum = Number(maslo.value) + Number(filtr.value) + Number(remen.value) + Number(stupica.value);
}


dostavka.addEventListener('change', function delivery() {
    
    if (dostavka.checked) {
        dos += 250;
    }
    else {
        dos -= 250;
    }
})


// [1, [3, 4, 5], 5]

btnsum.addEventListener('click', (e)=> {
    e.preventDefault();
    for (i = 0; i < document.forms[0].clining.length; i++) {
        if (document.forms[0].clining[i].checked) {
            if (document.forms[0].clining[i].value == 'mojka') {
                clining = 300;
            }
            else {
                clining = 600;
            }
        }
    }

    res();
    oplata[0].textContent = sum + dos + clining;
})

zapisKient.addEventListener('click', (e)=> {
    e.preventDefault();
    
    
    klient.style.display = 'flex';
    klientNumber.textContent = numberZakaz.value;
    klientFamily2.textContent = klientFamily.value;
    KlientName2.textContent = KlientName.value;
    klientAuto2.textContent = klientAuto.value;
    klientDate.textContent = dateZakaz.value;
    oplata[1].textContent = sum + dos + clining;
})

zapisPrintBtn.addEventListener('click', () => {
    window.print()
   }
)

zapisDeliteBtn.addEventListener('click', ()=> {
    klient.style.display = 'none';
})

// zapisPrintBtn.addEventListener('click', ()=> {
//     headerPrint.style.display = 'block';
// })

headerPrintBtnOk.addEventListener('click', ()=> {
    headerPrint.style.display = 'none';
})

class Cards{
    constructor() {

    }

    save () {
        card = ''

        for (let i =0; i<klientText.length; i++) {
            card = card + klientText[i].lastChild.textContent + ' ';
        }
        localStorage.setItem('card', card)
    }
}

let card = new Cards();


// alert('hello')

headerSave.addEventListener('click', card.save)
