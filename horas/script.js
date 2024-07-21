setInterval(() => {
    let horas = document.getElementById('horas')
    let minutos = document.getElementById('minutos')
    let segundos = document.getElementById('segundos')
    let ampm = document.getElementById('ampm')

    let hh = document.getElementById('hh')
    let mm = document.getElementById('mm')
    let ss = document.getElementById('ss')

    let hrdot = document.querySelector('.hr-dot')
    let mindot = document.querySelector('.min-dot')
    let segdot = document.querySelector('.sec-dot')


    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = h >= 12 ? 'PM' : 'AM'

    //converter 24 hr em 12hr
    if (h > 12) {
        h = h - 12
    }

    //add zero depois do numero da hora
    h = (h < 10) ? '0' + h : h
    m = (m < 10) ? '0' + m : m
    s = (s < 10) ? '0' + s : s


    horas.innerHTML = h + '<br><span>Horas</span>'
    minutos.innerHTML = m + '<br><span>Minutos</span>'
    segundos.innerHTML = s + '<br><span>Segundos</span>'
    ampm.innerHTML = am

    hh.style.strokeDashoffset = 440 - (440 * h) / 12
    mm.style.strokeDashoffset = 440 - (440 * m) / 60
    ss.style.strokeDashoffset = 440 - (440 * s) / 60

    hrdot.style.transform = `rotate( ${h * 30}deg)`
    mindot.style.transform = `rotate( ${m * 6}deg)`
    segdot.style.transform = `rotate( ${s * 6}deg)`

})


