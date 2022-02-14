/** 
 * Sucesión de Fibonacci
Se trata de una secuencia infinita de números naturales; a partir del 0 y el 1, se van sumando a
pares, de manera que cada número es igual a la suma de sus dos anteriores, de manera que:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…
Cree una función que reciba un numero entero n, dicha función debe retornar los n primeros
números de la Sucesión de Fibonacci.
 * **/


function fibonacci(number){
    
    //Base cases:
    if(number < 1 || number === 1){
        return [0]
    }
    if(number < 3){
        return [0,1];
    }
    if(number === 3){
        return [0,1,1];
    }
    let numbers = fibonacci(number -  1)
    numbers.push(numbers[number - 2] + numbers[number - 3])
    return numbers;
}

const number = 12
const fiboNumbers = fibonacci(number)
console.log(fiboNumbers)





