let guestBoard = document.getElementById('guest-board')
let homeBoard = document.getElementById("home-board")

function addOneToHome() {
    homeBoard.textContent = Number(homeBoard.textContent) + 1
}

function addTwoToHome() {
    homeBoard.textContent = Number(homeBoard.textContent) + 2
}

function addThreeToHome() {
    homeBoard.textContent = Number(homeBoard.textContent) + 3
}


function addOneToGuest() {
    guestBoard.textContent = Number(guestBoard.textContent) + 1
}

function addTwoToGuest() {
    guestBoard.textContent = Number(guestBoard.textContent) + 2
}

function addThreeToGuest() {
    guestBoard.textContent = Number(guestBoard.textContent) + 3
}