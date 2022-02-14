/**
 * Orden Aleatorio
Cree una función que reciba un numero entero n, dicha función debe retornar un listado de
números enteros aleatorios de n elementos.
Validaciones
Todos los elementos retornados, deben ser menor o igual al valor de n y mayor a 0
los elementos de la lista deben ser únicos por lo que no deben repetirse.
 * **/


function generateNumbers(maxNumber){
    const numbers  = []
    for (let i = 1; i <= maxNumber; i++) {
        numbers.push(i)
    }
    return numbers
}

function aleatoryOrden(maxNumber){
    if (maxNumber === 1){
        return [1];
    }
    if(maxNumber < 1){
        throw Error('Number must be greater or equals than 1')
    }
    const numbers  = generateNumbers(maxNumber)

    for(let j = maxNumber - 1;  j > 0; j--){
        let swapIndex = Math.floor(Math.random() * j);
        let tempNumber = numbers[swapIndex]
        numbers[swapIndex] = numbers[j]
        numbers[j] = tempNumber;
    }    
    return numbers;
}

console.log(aleatoryOrden(30))