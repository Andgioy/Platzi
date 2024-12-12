function random(min, max) { /* declaration of funtion*/
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function chosses(player) {

    let result = ""

    if (player == 1) {

        resutl = "Rock"
    }
    else if (player == 2) {

        result = "Paper"
    }
    else if (player == 3) {

        result = "Scissors"
    }
    else {
        result = "Lost"
    }
    return result
}
let player = 0
let pc = 0
let wins = 0
losses = 0


while (wins < 3 && losses < 3) {
    let pc = random(1, 3) /* calling the funtion*/
    player = prompt("choose: 1 rock, 2 paper, 3 scissors")
    alert("PC chosse : " + chosses(pc))
    alert(" You chosse : " + chosses(player))

    // battles
    if (pc == player) {
        alert("drawn")
    }
    else if (player == 1 && pc == 3) {

        alert("you win")
        wins = wins + 1
    }
    else if (player == 2 && pc == 1) {

        alert("you win")
        wins = wins + 1
    }
    else if (player == 3 && pc == 2) {

        alert("you win")
        wins = wins + 1

    }
    else {
        alert("you lose")

        losses = losses + 1
    }
}

alert(" Win " + wins + " times.losses " + losses + " times.")