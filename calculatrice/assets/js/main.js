
const firstNumber = document.querySelector('#firstNumber'),
    secondNumber = document.querySelector('#secondNumber'),
    operator = document.querySelector('#operator'),
    result = document.querySelector('#result');

function main(){
    let x = parseFloat(firstNumber.value),
        y = parseFloat(secondNumber.value),
        z = "";

    if(isNaN(x) || isNaN(y)) z = "Erreur";
    else {
        switch(operator.value){
            case "addition":
                z = x + y;
                break;
            case "substraction":
                z = x - y;
                break;
            case "multiplication":
                z = x * y;
                break;
            case "division":
                if(y == 0) z = "Math error" ;
                else z = x /y;

                break;
            default:
                alert('Cas inattendu');
        }
    }
    result.value = z;    
}
