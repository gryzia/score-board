let resultHome = 0
let resultGuest = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


function plusOneHome() {
    resultHome += 1
    homeScore.textContent = resultHome
}

function plusTwoHome() {
    resultHome += 2
    homeScore.textContent = resultHome
}

function plusThreeHome() {
    resultHome += 3
    homeScore.textContent = resultHome
}


function plusOneGuest() {
    resultGuest +=1
    guestScore.textContent = resultGuest
}

function plusTwoGuest() {
    resultGuest += 2
    guestScore.textContent = resultGuest
}

function plusThreeGuest() {
    resultGuest += 3
    guestScore.textContent = resultGuest
}