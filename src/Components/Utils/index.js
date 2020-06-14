export function getCurrentDate(separator = '') {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();


    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}

export function getCurrentHour() {

    let newDate = new Date()
    let hour = newDate.getHours();
    let min = newDate.getMinutes();


    return `${hour}:${min}`
}


export function conversionMoneda(moneda) {
    var valor = (moneda === null) ? 0 : moneda
    if (valor > 0)
        valor = valor / 100
        return valor
}