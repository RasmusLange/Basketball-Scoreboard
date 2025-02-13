let guestEl = document.getElementById("scoreGuest");
let homeEl = document.getElementById("scoreHome")
let gScore = 0;
let hScore = 0;

function funcBtn(place, amount){
    if(place === "g"){
        gScore += amount;
        guestEl.textContent = gScore;
    } else{
        hScore += amount;
        homeEl.textContent = hScore;
    }
}