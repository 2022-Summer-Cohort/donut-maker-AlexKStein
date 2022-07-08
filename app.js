import DonutMaker from "./js/DonutMaker.js";

let donutMaker = new DonutMaker();

const counterEl = document.querySelector("#counter");
const donutBtn = document.querySelector("#donut-maker");
const upgradeBtn = document.querySelector("#buy-clicks");
const clickRateEl = document.querySelector("#click-rate");
const autoRateEl = document.querySelector("#auto-count");
const autoBtn = document.querySelector("#buy-autos");
const resetBtn = document.querySelector("#reset-game");

function donutCounter(){
    counterEl.innerText = "Total Donuts: " + donutMaker.totalDonuts.toPrecision(4);
    if(donutMaker.totalDonuts>=donutMaker.mCost){
        upgradeBtn.disabled= false;
    }
    if(donutMaker.totalDonuts >= donutMaker.autoCost){
        autoBtn.disabled=false;
    }
}
function updateStats(){
    clickRateEl.innerText = "You make " + donutMaker.multiplier.toPrecision(4) + " donuts per click.";
    autoRateEl.innerText = "You automatically make " + (donutMaker.autoClickers*donutMaker.multiplier).toPrecision(4) + " donuts per second.";
}
function autos(){
    donutMaker.activateAutoClicks()
    donutCounter()
}

donutCounter();
setInterval(autos, 1000)


donutBtn.addEventListener("click", ()=>{
    donutMaker.addDonut();
    console.log(donutMaker);
    donutCounter();
})
upgradeBtn.addEventListener("click", ()=>{
    donutMaker.addClickMultiplier();
    updateStats();    
    upgradeBtn.innerText= "Increase Donut-making skills: " +  Math.round(donutMaker.mCost) + " Donuts";
    donutCounter();
})
autoBtn.addEventListener("click", ()=>{
    donutMaker.addAutoClicks();
    updateStats();
    autoBtn.innerText= "Buy Auto-donuts: " +  Math.round(donutMaker.autoCost) + " Donuts";
    donutCounter();
})
resetBtn.addEventListener("click", ()=>{
    location.reload();
})

