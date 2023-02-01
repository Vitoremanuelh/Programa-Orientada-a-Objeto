import carros from './carros'
import months from './months.js'

// Filtra meses
const filteredMonths = months.filter( (months)=> {
    return months.days === 31
})

console.log(filteredMonths)

let toPrint = ''

const filteredCarros = carros.filter( (carros)=> {
    return carros.ano === 2020
})

// Lista meses
filteredMonths.forEach(month => {
   toPrint += month.month + ', '
});

// for( let c = 0; c < filteredMonths.length; c++ ){

// }

let meses = [30,30,30] // array comum

// Reduce - função com todos os itens do array e devolve um valor único
let sumMonthDays = filteredMonths.reduce( (prev, next) => {
    return {days: prev.days + next.days}
})

console.log(sumMonthDays)

