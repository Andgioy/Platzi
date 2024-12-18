
// REDUCING CODE //

//function startGame//
let startover = document.getElementById('Restart')
let sectionAttack = document.getElementById('selct_Attack')
let buttonDragonPet = document.getElementById('button_selection')
let buttonFire = document.getElementById('button_Fire')
let buttonWater = document.getElementById('button_Water')
let buttonSoil = document.getElementById('button_Soil')
let buttonRestart = document.getElementById('button_Restart')

//function selectDragonPet//

let sectionDragon = document.getElementById('select_Dragon')
/*let sectionAttack = document.getElementById('selct_Attack')*/ // has been eleminated this line of code becouse it was declared in other funtion (it was declared for second time it isn't necessary)
let monkey = document.getElementById('dragon-Fire')
let sharking = document.getElementById('dragon-Water')
let changuita = document.getElementById('dragon-Soil')
let spanDragonPlayer = document.getElementById('dragon_Player')

//function enemyDragonPet//

let spanDragonEnemy = document.getElementById('dragon_Enemy')

//function battlesWild//

let spanheartplayer = document.getElementById('heart-player')
let spanheartenemy = document.getElementById('heart-enemy')

//function createMessages//

let sectionMessage = document.getElementById('resultado') //nuestras variables //
let ataqueplayer = document.getElementById('ataque-player')
let ataquenemy = document.getElementById('ataqu-enemy')

/* variable global*/
let attacksPlayer
let attacksEnemy
let heartplayer = 3;
let heartenemy = 3;


function startGame() {  //DOM//

    // we have removed all variable (LET,Element) fron this funtion and then positioned all of them in the top (doing that we can test if our code is still working proporly)// 

    startover.style.display = 'none'
    sectionAttack.style.display = 'none' /* desahabilitar selecion de ataques */

    buttonDragonPet.addEventListener('click', selectDragonPet)

    buttonFire.addEventListener('click', attackFire)

    buttonWater.addEventListener('click', attackWater)

    buttonSoil.addEventListener('click', attackSoil)

    buttonRestart.addEventListener('click', restartGame) /* reiniciar*/

}

function selectDragonPet() {


    sectionDragon.style.display = 'none' /* desaparece la seleccion de dragons caundo se selecciona un dragon */

    sectionAttack.style.display = 'flex' /* aparece nuevamente cuando seleciona un animal  */



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

    let enemyAttack = random(1, 3) //in this case we not touch this line becouse is not pointed to an element HTML it also the line is not repeating, this let only is giving us the result.

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


    // it is creating and adding the news paraghaph //
    /* let notificacion = document.createElement('p') se elimina ya que se declara el resultado de empate como un texto ya que nos interesa visualizar el texto en pantalla */

    // these variable are specifically for a paraghaph//
    let newAttackplayer = document.createElement('p')
    let newAttackenemy = document.createElement('p')

    // doing a bond between paragaph and html 'always needs to be bind'// 
    sectionMessage.innerHTML = resultados
    newAttackplayer.innerHTML = attacksPlayer
    newAttackenemy.innerHTML = attacksEnemy

    //se verifica que los hijos esten vinculados con los elementos gad the html //
    /* sectionMessage.appendChild(notificacion) se elimina tambien ya que se declara desde desde el bind .inner*/
    ataqueplayer.appendChild(newAttackplayer)
    ataquenemy.appendChild(newAttackenemy)

}

function messagessfinal(resultfinal) {

    let sectionMessage = document.getElementById('resultado')

    /* let paragraph = document.createElement('p') este elemento se elimina */
    sectionMessage.innerHTML = resultfinal

    /*sectionMessage.appendChild(paragraph) se elimina para que el mensaje final apracesca al finalizar el jeugo*/

    /*==================DISABLED BUTTONS=========================*/

    let buttonFire = document.getElementById('button_Fire')
    buttonFire.disabled = true

    let buttonWater = document.getElementById('button_Water')
    buttonWater.disabled = true

    let buttonSoil = document.getElementById('button_Soil')
    buttonSoil.disabled = true

    let startover = document.getElementById('Restart')
    startover.style.display = 'block'

}



function restartGame() {
    location.reload()
}

function random(min, max) { /* declaration of funtion random*/
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', startGame)



