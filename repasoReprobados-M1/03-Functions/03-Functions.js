function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 
let AmPm=time.slice(8,10)

    let hora=time.slice(0,2)
    let minutos=time.slice(3,5)
    let segundos=time.slice(6,8)

    if (hora>12 || minutos>59 || segundos>59 || time.length==0 || !time.length==8) {
        return false;
    }

    if (AmPm == "AM") {
        if (hora=="12") {
            let newHora=parseInt(hora)-12;
            return `${newHora}0:${minutos}:${segundos}`
        }
        return `${hora}:${minutos}:${segundos}`
    }

    if (AmPm == "PM") {
        if (hora=="12") {
            return `${hora}:${minutos}:${segundos}`
        }
        let newHora=parseInt(hora)+12;
        return `${newHora}:${minutos}:${segundos}`
    }





}

module.exports = {
    timeConversion
}