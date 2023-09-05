// get basic operations working + - / *
// do operations with button input


let firstNumber = '', operator = '', lastNumber = '', answer;

const clear = () => {
    firstNumber = '', operator = '', lastNumber = '';
}

const operation = (a ,b) => {
    if (operator == 'plus') {
        answer = parseFloat(a)+parseFloat(b);
        console.log(answer);

    } else if (operator == 'minus') {
        answer = parseFloat(a)-parseFloat(b);
        console.log(answer);
   
    } else if (operator == 'multiply') {
        answer = parseFloat(a)*parseFloat(b);
        console.log(answer);

    } else if (operator == 'divide') {
        if (b == '0') {
            console.log('dum bich');
            clear();
        } else {
            answer = parseFloat(a)/parseFloat(b);
            console.log(answer);
        }

    } else if (operator == 'remainder') {
        answer = parseFloat(a)%parseFloat(b);
        console.log(answer);
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id == 'clear') {
            clear();
        }

        else if (button.id == 'answer') {
            if (firstNumber == '' || lastNumber == '') {
                console.log("stupid hoe")
            } else {
                operation(firstNumber, lastNumber);
                clear();
            }
        }

        else if (button.id == 'plus' || button.id == 'minus' || button.id == 'multiply' ||
            button.id == 'divide' || button.id == 'remainder') {
            if (!(answer == undefined)) {
                firstNumber = answer;
            }
            operator = button.id;
            console.log(operator)
        }
        
        else if (operator == '') {
            firstNumber += button.textContent;
            answer = undefined;
            console.log(firstNumber);
        } else {
            lastNumber += button.textContent;
            console.log(lastNumber);
        }
    })
})




