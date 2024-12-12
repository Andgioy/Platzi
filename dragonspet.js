/* variable global*/

let attacksPlayer
let attacksEnemy
let heartplayer = 3;
let heartenemy = 3;


function startGame() {  /*DOM*/

    let selectAttack = document.getElementById('"select_Dragon"')
    selectAttack.style.display

    let buttonDragonPet = document.getElementById('button_selection')
    buttonDragonPet.addEventListener('click', selectDragonPet)


    let buttonFire = document.getElementById('button_Fire')
    buttonFire.addEventListener('click', attackFire)

    let buttonWater = document.getElementById('button_Water')
    buttonWater.addEventListener('click', attackWater)

    let buttonSoil = document.getElementById('button_Soil')
    buttonSoil.addEventListener('click', attackSoil)


    let buttonRestart = document.getElementById('button_Restart')
    buttonRestart.addEventListener('click', restartGame)

}

function selectDragonPet() {

    let monkey = document.getElementById('dragon-Fire')
    let sharking = document.getElementById('dragon-Water')
    let changuita = document.getElementById('dragon-Soil')
    let spanDragonPlayer = document.getElementById('dragon_Player')

    if (monkey.checked) {
        spanDragonPlayer.innerHTML = 'Chocomonkey'
    }
    else if (sharking.checked) {
        spanDragonPlayer.innerHTML = 'Sharking'
    }
    else if (changuita.checked) {
        spanDragonPlayer.innerHTML = 'Changuita'
    }
    else {
        alert('Select a Dragon')
    }

    enemyDragonPet()
}

function enemyDragonPet() {

    let enemyAttack = random(1, 3)
    let spanDragonEnemy = document.getElementById('dragon_Enemy')

    if (enemyAttack == 1) {

        spanDragonEnemy.innerHTML = 'Chocomonkey'
    }
    else if (enemyAttack == 2) {

        spanDragonEnemy.innerHTML = 'Sharking'
    }
    else {
        spanDragonEnemy.innerHTML = 'Changuita'
    }
}

function attackFire() {
    attacksPlayer = 'FIRE'
    attacksRandomEnemy()
}

function attackWater() {
    attacksPlayer = 'WATER'
    attacksRandomEnemy()
}

function attackSoil() {
    attacksPlayer = 'SOIL'
    attacksRandomEnemy()
}

function attacksRandomEnemy() {
    let attackrandom = random(1, 3)

    if (attackrandom == 1) {
        attacksEnemy = 'FIRE'
    } else if (attackrandom == 2) {
        attacksEnemy = 'WATER'
    } else {
        attacksEnemy = 'SOIL'
    }
    battlesWild()    /* it is calling the funtion */
}

function battlesWild() {

    let spanheartplayer = document.getElementById('heart-player')
    let spanheartenemy = document.getElementById('heart-enemy')

    // battles
    if (attacksEnemy == attacksPlayer) {

        createMessages("DRAWN")
    }
    else if (attacksPlayer == 'FIRE' && attacksEnemy == 'SOIL') {

        createMessages("WINNER🏆")
        heartenemy--
        spanheartenemy.innerHTML = heartenemy
    }
    else if (attacksPlayer == 'WATER' && attacksEnemy == 'FIRE') {

        createMessages("WINNER🏆")
        heartenemy--
        spanheartenemy.innerHTML = heartenemy
    }
    else if (attacksPlayer == 'SOIL' && attacksEnemy == 'WATER') {

        createMessages("WINNER🏆")
        heartenemy--
        spanheartenemy.innerHTML = heartenemy
    }
    else {
        createMessages(" LOSE😝")
        heartplayer--
        spanheartplayer.innerHTML = heartplayer

    }
    viewheart()
}

function viewheart() {

    if (heartenemy == 0) {
        messagessfinal('CONGRATULATION🏆🏆🏆')
    }
    else if (heartplayer == 0) {
        messagessfinal('YOU LOST NEVER GIVE UP 🦾')
    }
}


function createMessages(resultados) {

    let sectionMessage = document.getElementById('Messages')

    let paragraph = document.createElement('p')
    paragraph.innerHTML = 'The Dragon attacked with ' + attacksPlayer + ', Dragon Enemy attacked with ' + attacksEnemy + '  ' + resultados;

    sectionMessage.appendChild(paragraph)


}

function messagessfinal(resultfinal) {

    let sectionMessage = document.getElementById('Messages')

    let paragraph = document.createElement('p')
    paragraph.innerHTML = resultfinal

    sectionMessage.appendChild(paragraph)

    /*==================DESABLE BUTTONS=========================*/

    let buttonFire = document.getElementById('button_Fire')
    buttonFire.desable = true

    let buttonWater = document.getElementById('button_Water')
    buttonWater.adesable = true

    let buttonSoil = document.getElementById('button_Soil')
    buttonSoil.desable = true

}


function restartGame() {
    location.reload()
}

function random(min, max) { /* declaration of funtion random*/
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', startGame)