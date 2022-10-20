class Quiz {
    constructor(){

    }
    show(category){
        let activeDB = DB[category];
        console.log(activeDB);
        for (let i = 0; i<activeDB.length; i++) {
            let newTest = document.createElement('div');
            newTest.classList.add('test');

            let newTitle = document.createElement('h3');
            newTitle.classList.add('test__title');
            newTitle.textContent = activeDB[i].quiz;


            
            for (let j = 0; j < activeDB[i].answers.length; j++) {
                let newLabel = document.createElement('label');
                newLabel.classList.add('test__label');
                newLabel.textContent = activeDB[i].answers[j];

                let newInput = document.createElement('input');
                newInput.classList.add('test__select');
                newInput.name = `quiz${i}`
                newInput.type = 'radio';
                newLabel.appendChild(newInput);
                newTest.appendChild(newLabel);

            }

            newTest.appendChild(newTitle);

            testMain.appendChild(newTest)
            



        }
    }

}

let quiz = new Quiz();
quiz.show('html');
quiz.show('css');


