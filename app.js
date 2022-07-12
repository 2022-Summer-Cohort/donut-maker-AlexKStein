import DonutMaker from "./js/DonutMaker.js";

let donutMaker = new DonutMaker();

const counterEl = document.querySelector("#counter");
const donutBtn = document.querySelector("#donut-maker");
const upgradeBtn = document.querySelector("#buy-clicks");
const clickRateEl = document.querySelector("#click-rate");
const autoRateEl = document.querySelector("#auto-count");
const autoBtn = document.querySelector("#buy-autos");
const resetBtn = document.querySelector("#reset-game");
const mutliplierEl = document.querySelector("#multiplier-count");
const multiplyBtn = document.querySelector("#buy-multiplier");

function donutCounter(){
    counterEl.innerText = "Total Donuts: " + Math.round(donutMaker.totalDonuts);
    if(donutMaker.totalDonuts>=donutMaker.upgradeClickCost){
        upgradeBtn.disabled= false;
    } else{
        upgradeBtn.disabled=true;
    }
    if(donutMaker.totalDonuts >= donutMaker.autoCost){
        autoBtn.disabled=false;
    } else{
        autoBtn.disabled=true;
    }
    if(donutMaker.totalDonuts >= donutMaker.multiplierCost){
        multiplyBtn.disabled=false;
    } else{
        multiplyBtn.disabled=true;
    }
}
function updateStats(){
    clickRateEl.innerText = "You make " + Math.round(donutMaker.clickers*donutMaker.multiplier) + " donuts per click.";
    autoRateEl.innerText = "You automatically make " + Math.round(donutMaker.autoClickers*donutMaker.multiplier) + " donuts per second.";
    mutliplierEl.innerText = "You make "+ donutMaker.multiplier +"x as many donuts."

}
function autos(){
    donutMaker.activateAutoClicks()
    donutCounter()
}

donutCounter();
setInterval(autos, 1000)

donutBtn.addEventListener("click", ()=>{
    donutMaker.addDonut();
    // console.log(donutMaker);
    donutCounter();
})
upgradeBtn.addEventListener("click", ()=>{
    donutMaker.addClicks();
    updateStats();    
    upgradeBtn.innerText= "Increase Donut-making skills: " +  Math.round(donutMaker.upgradeClickCost) + " Donuts";
    donutCounter();
})
autoBtn.addEventListener("click", ()=>{
    donutMaker.addAutoClicks();
    updateStats();
    autoBtn.innerText= "Buy Auto-donuts: " +  Math.round(donutMaker.autoCost) + " Donuts";
    donutCounter();
})
multiplyBtn.addEventListener("click", ()=>{
    donutMaker.addClickMultiplier();
    updateStats();
    multiplyBtn.innerHTML="Buy a multiplier: " + donutMaker.mCost+ " Donuts";
    donutCounter();
})
resetBtn.addEventListener("click", ()=>{
    location.reload();
})

