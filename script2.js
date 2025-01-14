let aloitettu = false
let pelaajienMaara
let vuoronPisteet = 0
let vuoronumero = 1
let randomNumber1
let randomNumber2
let tuplat = 0


if (aloitettu == false) {
    document.getElementById('noppa').style.display = 'none'
    document.getElementById('vuoronPisteet').style.display = 'none'
    document.getElementById('lopetaVuoro').style.display = 'none'
}

function aloita() {
    aloitettu = true
    document.getElementById('noppa').style.display = 'block'
    document.getElementById('aloita').style.display = 'none'
    document.getElementById('lopetaVuoro').style.display = 'none'
    document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + document.getElementById('nimimerkki1').innerHTML + ' vuoro'
}

function heitaNoppa1(){
    randomNumber1 = Math.floor(Math.random()*6)+1
    const diceImage = 'img/dice' + randomNumber1 + '.png'
    document.getElementById('noppa1').setAttribute('src', diceImage)
}

function heitaNoppa2(){
    randomNumber2 = Math.floor(Math.random()*6)+1
    const diceImage2 = 'img/dice' + randomNumber2 + '.png'
    document.getElementById('noppa2').setAttribute('src', diceImage2)
}

function taustavari(){
    if (vuoronumero == 1){
        document.body.style.backgroundColor = 'darkslategray'
    }
    if (vuoronumero == 2){
        document.body.style.backgroundColor = 'green'
    }
    if (vuoronumero == 3){
        document.body.style.backgroundColor = 'rebeccapurple'
    }
    if (vuoronumero == 4){
        document.body.style.backgroundColor = 'brown'
    }
    if (vuoronumero == 5){
        document.body.style.backgroundColor = 'darkblue'
    }
    if (vuoronumero == 6){
        document.body.style.backgroundColor = 'palevioletred'
    }
    if (vuoronumero == 7){
        document.body.style.backgroundColor = 'darkred'
    }
    if (vuoronumero == 8){
        document.body.style.backgroundColor = 'red'
    }
    if (vuoronumero == 9){
        document.body.style.backgroundColor = 'teal'
    }
    if (vuoronumero == 10){
        document.body.style.backgroundColor = 'darkviolet'
    }
}

function vuoro(){
    document.getElementById('lopetaVuoro').style.display = 'block'
    let pisteet = document.getElementById('pisteet'+vuoronumero).innerHTML
    let pisteetNumeroina = Number(pisteet)
    let nimimerkki = document.getElementById('nimimerkki'+vuoronumero).innerHTML
    document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + nimimerkki + ' vuoro'
    if (randomNumber1 == randomNumber2 && randomNumber1 != 1){
        vuoronPisteet = vuoronPisteet + randomNumber1 * 4
        document.getElementById('vuoronPisteet').style.display = 'block'
        document.getElementById('vuoronPisteet').innerHTML = 'Vuoron pisteet tällä hetkellä: ' + vuoronPisteet
        tuplat++
        if (tuplat == 3){
            tuplat = 0
            vuoronPisteet = 0
            document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + document.getElementById('nimimerkki'+vuoronumero).innerText + ' vuoro päättyy'
            pisteetNumeroina = pisteetNumeroina + vuoronPisteet
            document.getElementById('pisteet'+vuoronumero).innerHTML = pisteetNumeroina
            vuoronumero++
            taustavari()
            document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + document.getElementById('nimimerkki'+vuoronumero).innerText + ' vuoro'
            if (vuoronumero>pelaajienMaara){
                vuoronumero = 1
                taustavari()
            }
            document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + document.getElementById('nimimerkki'+vuoronumero).innerText + ' vuoro'
        }
    }
    if (randomNumber1 == 1 && randomNumber2 == 1){
        tuplat++
        vuoronPisteet = vuoronPisteet + 25
        document.getElementById('vuoronPisteet').style.display = 'block'
        document.getElementById('vuoronPisteet').innerHTML = 'Vuoron pisteet tällä hetkellä: ' + vuoronPisteet
        if (tuplat == 3){
            tuplat = 0
            vuoronPisteet = 0
            document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + document.getElementById('nimimerkki'+vuoronumero).innerText + ' vuoro päättyy'
            pisteetNumeroina = pisteetNumeroina + vuoronPisteet
            document.getElementById('pisteet'+vuoronumero).innerHTML = pisteetNumeroina
            vuoronumero++
            taustavari()
            document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + document.getElementById('nimimerkki'+vuoronumero).innerText + ' vuoro'
            if (vuoronumero>pelaajienMaara){
                vuoronumero = 1
                taustavari()
                document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + document.getElementById('nimimerkki'+vuoronumero).innerText + ' vuoro'
            }
        }
    }
    if (randomNumber1 == 1 && randomNumber2 != 1){
        tuplat = 0
        vuoronPisteet = 0
        document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + document.getElementById('nimimerkki'+vuoronumero).innerText + ' vuoro päättyy'
        pisteetNumeroina = pisteetNumeroina + vuoronPisteet
        document.getElementById('pisteet'+vuoronumero).innerHTML = pisteetNumeroina
        vuoronumero++
        taustavari()
        document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + document.getElementById('nimimerkki'+vuoronumero).innerText + ' vuoro'
        if (vuoronumero>pelaajienMaara){
            vuoronumero = 1
            document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + document.getElementById('nimimerkki'+vuoronumero).innerText + ' vuoro'
        }
    }
    if (randomNumber2 == 1 && randomNumber1 != 1){
        tuplat = 0
        vuoronPisteet = 0
        document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + document.getElementById('nimimerkki'+vuoronumero).innerText + ' vuoro päättyy'
        pisteetNumeroina = pisteetNumeroina + vuoronPisteet
        document.getElementById('pisteet'+vuoronumero).innerHTML = pisteetNumeroina
        vuoronumero++
        taustavari()
        document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + document.getElementById('nimimerkki'+vuoronumero).innerText + ' vuoro'
        if (vuoronumero>pelaajienMaara){
            vuoronumero = 1
            taustavari()
            document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + document.getElementById('nimimerkki'+vuoronumero).innerText + ' vuoro'
        }
    }
    if (randomNumber1 != randomNumber2 && randomNumber1 != 1 && randomNumber2 != 1){
        tuplat = 0
        vuoronPisteet = vuoronPisteet + randomNumber1 + randomNumber2
        document.getElementById('vuoronPisteet').style.display = 'block'
        document.getElementById('vuoronPisteet').innerHTML = 'Vuoron pisteet tällä hetkellä: ' + vuoronPisteet
    }
    if (vuoronPisteet + pisteetNumeroina >= 100){
        document.getElementById('pelaaja1').style.visibility = 'hidden'
        document.getElementById('pelaaja2').style.visibility = 'hidden'
        document.getElementById('pelaaja3').style.visibility = 'hidden'
        document.getElementById('pelaaja4').style.visibility = 'hidden'
        document.getElementById('pelaaja5').style.visibility = 'hidden'
        document.getElementById('pelaaja6').style.visibility = 'hidden'
        document.getElementById('pelaaja7').style.visibility = 'hidden'
        document.getElementById('pelaaja8').style.visibility = 'hidden'
        document.getElementById('pelaaja9').style.visibility = 'hidden'
        document.getElementById('pelaaja10').style.visibility = 'hidden'
        document.getElementById('noppa').style.display = 'none'
        document.getElementById('noppa1').style.display = 'none'
        document.getElementById('noppa2').style.display = 'none'
        document.getElementById('poytakirja').style.display = 'none'
        document.getElementById('lopetaVuoro').style.display = 'none'
        document.getElementById('vuoronPisteet').style.display = 'none'
        document.getElementById('vuoroNumero').style.display = 'none'
        document.getElementById('voittaja').innerHTML = 'Voittaja on ' + nimimerkki
    }
}

function lopetaVuoro(){
    let pisteet = document.getElementById('pisteet'+vuoronumero).innerHTML
    let pisteetNumeroina = Number(pisteet)
    let nimimerkki = document.getElementById('nimimerkki'+vuoronumero).innerHTML
    document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + nimimerkki + ' vuoro päättyy'
    pisteetNumeroina = pisteetNumeroina + vuoronPisteet
    document.getElementById('pisteet'+vuoronumero).innerHTML = pisteetNumeroina
    vuoronPisteet = 0
    tuplat = 0
    document.getElementById('vuoronPisteet').innerHTML = 'Vuoron pisteet tällä hetkellä: ' + vuoronPisteet
    vuoronumero++
    taustavari()
    document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + document.getElementById('nimimerkki'+vuoronumero).innerText + ' vuoro'
    if (vuoronumero>pelaajienMaara){
        vuoronumero = 1
        taustavari()
        document.getElementById('vuoroNumero').innerHTML = 'Pelaajan ' + document.getElementById('nimimerkki'+vuoronumero).innerText + ' vuoro'
    }
}

function rolling() {
    var sound = new  Audio('rpg-dice-rolling-95182.mp3');
    sound.volume=0.3 
    sound.play();
}

    document.getElementById('pelaaja1').style.visibility = 'hidden'
    document.getElementById('pelaaja2').style.visibility = 'hidden'
    document.getElementById('pelaaja3').style.visibility = 'hidden'
    document.getElementById('pelaaja4').style.visibility = 'hidden'
    document.getElementById('pelaaja5').style.visibility = 'hidden'
    document.getElementById('pelaaja6').style.visibility = 'hidden'
    document.getElementById('pelaaja7').style.visibility = 'hidden'
    document.getElementById('pelaaja8').style.visibility = 'hidden'
    document.getElementById('pelaaja9').style.visibility = 'hidden'
    document.getElementById('pelaaja10').style.visibility = 'hidden'
    document.getElementById('aloita').style.visibility = 'hidden'

function tallennaMaara(){
    if (document.forms['pelaajienMaara']['maara'].value >= 2 && document.forms['pelaajienMaara']['maara'].value <= 10){
        document.getElementById('aloita').style.visibility = 'visible'
        pelaajienMaara = document.forms['pelaajienMaara']['maara'].value
        document.getElementById('pelaajienMaara').innerHTML = 'Huom! Pelaajan nimimerkin voi vaihtaa napauttamalla nimimerkkiä ja kirjoittamalla uuden nimimerkin'
        for (let i = 1; i <= pelaajienMaara; i++){
            document.getElementById('pelaaja'+i).style.visibility = 'visible'
        }
    } else{
        alert('Pelaajia saa olla 2-10!')
    }
}