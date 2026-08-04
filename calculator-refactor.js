const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b
}

function division(a, b) {
    
    if (b === 0) {
        console.error("Undifined");
        
    } else{
        return a / b
    }
}

function startApp(){
    const operations = { '+': add, '-': subtract, '*': multiply, '/': division};
    rl.question('Num1: ', (num1) => {
        rl.question('Num2: ', (num2) => {
            rl.question('Operator (+, -, *, /): ', (op) => {
                if  (operations[op]){
                    console.log(operations[op] (Number(num1), Number(num2)));
                    startApp()
                } else {
                    console.log("invalid Oparator");
                    console.log("need one of the following (+, -, *, /)")
                    startApp()
                } 
            })
        })
    })
}

startApp()