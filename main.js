let msg = 'Hi perform basic calculation';
let butt = document.getElementById('#btn');

function solveProblem() {

    alert(msg);
    const operator = window.prompt('Enter the Operator');
    let num1 = parseFloat(window.prompt('Enter first value'))
    let num2 = parseFloat(window.prompt('Enter 2nd value'))
    let solution;


    if (operator === '+') {
        solution = num1 + num2;
        alert(`${num1} ${operator} ${num2} = ${solution}`)
    } else if (operator === '-') {
        solution = num1 - num2;
        alert(`${num1} ${operator} ${num2} = ${solution}`)
    } else if (operator === '/') {
        solution = num1 / num2;
        alert(`${num1} ${operator} ${num2} = ${solution}`)
    } else if (operator === '*') {
        solution = num1 * num2;
        alert(`${num1} ${operator} ${num2} = ${solution}`)
    } else if (operator === '%') {
        solution = num1 % num2;
        alert(`${num1} ${operator} ${num2} = ${solution}`)
    } else if (operator === '^') {
        solution = num1 ^ num2;
        alert(`${num1} ${operator} ${num2} = ${solution}`)
    } else {
        alert('you have entered the wrong operator');
    }
}


butt.addEventListener('click', () => {
    solveProblem()
});
