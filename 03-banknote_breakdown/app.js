/**
 * Desglose Billetes
Cree una función que reciba un numero entero amount,
amount es un monto que debe ser desglosado en billetes, donde las monedas más grandes tienen
prioridad.
el desglose se trata de identificar cual sería la cantidad necesaria de cada billete para igualar el
monto amount.
la función debe retornar una lista de String donde cada elemento es igual al siguiente
mensaje [Cantidad de billetes] x [Billete] = [Total]
la moneda para usar son las de Republica Dominicana, donde tenemos las siguientes
denominaciones [2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1]
Nota,
no se deben imprimir los elementos donde [cantidad de billetes] es igual a cero.
Recuerde agregar un espacio antes y después de ( x ) y de ( = )

 * **/


function banknotesBreakdown(amount){
    const banknotes = [2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1]
    let banknotesCounter = []
    banknotesCounter[9] = 0
    let result = []
    for (let i = 0; i < 10; i++) {
         if(amount >= banknotes[i]){
             banknotesCounter[i] = Math.floor(amount / banknotes[i])             
             amount = amount - banknotesCounter[i] * banknotes[i]             
             result.push(`${banknotesCounter[i]} X ${banknotes[i]} = ${(banknotesCounter[i] * banknotes[i])} `)
         }         
    }
    return result   
}

console.log(banknotesBreakdown(2013))