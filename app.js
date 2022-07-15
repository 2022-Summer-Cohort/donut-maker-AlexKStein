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

const defaultDonutBtn = document.querySelector("#default-donut");
const theDonutEl = document.querySelector("#donut-maker");
const frodoBtn = document.querySelector("#frodonut");
const greenBtn = document.querySelector("#green-donut");
const blueBtn = document.querySelector("#blue-donut");
const redBtn = document.querySelector("#red-donut");
const cosmicBtn = document.querySelector("#cosmic-donut");

const backgroundEl = document.querySelector("#game-window");
const donutBgBtn = document.querySelector("#default-bg");
const shopBtn = document.querySelector("#shop-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");
const forestBtn=document.querySelector("#forest-btn");
const beachBtn=document.querySelector("#beach-btn");
const spaceBtn = document.querySelector("#space-btn");
let isFrodonutEquipped = new Boolean(false);
let isSpaceEquipped = new Boolean(false);
let isMuted=new Boolean(false);
const muteBtn = document.querySelector("#mute-btn");


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
    if(donutMaker.totalDonuts >= 10 && donutMaker.frodonut == false){
        frodoBtn.disabled=false;
    } else if (donutMaker.frodonut == false){
        frodoBtn.disabled=true;
    }
    if(donutMaker.totalDonuts >= 500 && donutMaker.greenDonut == false){
        greenBtn.disabled=false;
    } else if (donutMaker.greenDonut == false){
        greenBtn.disabled=true;
    }
    if(donutMaker.totalDonuts >= 2500 && donutMaker.blueDonut == false){
        blueBtn.disabled=false;
    } else if (donutMaker.blueDonut == false){
        blueBtn.disabled=true;
    }
    if(donutMaker.totalDonuts >= 10000 && donutMaker.redDonut == false){
        redBtn.disabled=false;
    } else if (donutMaker.redDonut == false){
        redBtn.disabled=true;
    }
    if(donutMaker.totalDonuts >= 100000 && donutMaker.cosmicDonut == false){
        cosmicBtn.disabled=false;
    } else if (donutMaker.cosmicDonut == false){
        cosmicBtn.disabled=true;
    }
    if(donutMaker.totalDonuts >= 25 && donutMaker.rainbowBG == false){
        rainbowBtn.disabled=false;
    } else if (donutMaker.rainbowBG == false){
        rainbowBtn.disabled=true;
    }
    if(donutMaker.totalDonuts >= 100 && donutMaker.shopBG == false){
        shopBtn.disabled=false;
    } else if (donutMaker.shopBG == false){
        shopBtn.disabled=true;
    }
    if(donutMaker.totalDonuts >= 1000 && donutMaker.forestBG == false){
        forestBtn.disabled=false;
    } else if (donutMaker.forestBG == false){
        forestBtn.disabled=true;
    }
    if(donutMaker.totalDonuts >= 10000 && donutMaker.beachBG == false){
        beachBtn.disabled=false;
    } else if (donutMaker.beachBG == false){
        beachBtn.disabled=true;
    }
    if(donutMaker.totalDonuts >= 100000 && donutMaker.spaceBG == false){
        spaceBtn.disabled=false;
    } else if (donutMaker.spaceBG == false){
        spaceBtn.disabled=true;
    }
}
function updateStats(){
    clickRateEl.innerText = "Donuts per Click: " + Math.round(donutMaker.clickers*donutMaker.multiplier);
    autoRateEl.innerText = "Donuts per Second: "+ Math.round(donutMaker.autoClickers*donutMaker.multiplier);
    mutliplierEl.innerText = "Donut Multiplier: "+ donutMaker.multiplier +"x"
}
function autos(){
    donutMaker.activateAutoClicks()
    donutCounter()
}

donutCounter();
setInterval(autos, 1000);

//sounds
function clickSound(){
    const normalClick = new Audio("/audio/clickNormal.wav");
    const frodoClick = new Audio("/audio/clickDog.mp3");
    const spaceClick1 = new Audio("/audio/clickSpace1.mp3");
    const spaceClick2 = new Audio("/audio/clickSpace2.mp3");
    if(isMuted==false){
        if(isSpaceEquipped==true){
            if(donutMaker.totalDonuts%2==0){
                spaceClick1.play();
            } else{
                spaceClick2.play();
            }
        } else if(isFrodonutEquipped==true){
            frodoClick.play();
        } else{
            normalClick.play();
        }
    }
}
function equipSound(){
    const equip = new Audio("/audio/equip.wav");
    if(isMuted==false){
        equip.play();
    }
}
function upgradeSound(){
    const upgrade = new Audio("/audio/upgrade.wav");
    if(isMuted==false){
        upgrade.play();
    }
}
function purchaseSound(){
    const unlock = new Audio("/audio/purchase.wav");
    if(isMuted==false){
        unlock.play();
    }
}
//buttons
muteBtn.addEventListener("click", ()=>{
    if(isMuted==false){
        isMuted=true;
        muteBtn.src="/gfx/muted.png";
    }else{
        isMuted=false;
        muteBtn.src="/gfx/unmuted.png";
    }
})
donutBtn.addEventListener("click", ()=>{
    donutMaker.addDonut();
    clickSound();
    donutCounter();
})
upgradeBtn.addEventListener("click", ()=>{
    upgradeSound();
    donutMaker.addClicks();
    updateStats();    
    upgradeBtn.innerText= "Increase Donut-making skills: " +  Math.round(donutMaker.upgradeClickCost) + " Donuts";
    donutCounter();
})
autoBtn.addEventListener("click", ()=>{
    upgradeSound();
    donutMaker.addAutoClicks();
    updateStats();
    autoBtn.innerText= "Buy Auto-donuts: " +  Math.round(donutMaker.autoCost) + " Donuts";
    donutCounter();
})
multiplyBtn.addEventListener("click", ()=>{
    upgradeSound();
    donutMaker.addClickMultiplier();
    updateStats();
    multiplyBtn.innerHTML="Buy a multiplier: " + donutMaker.mCost+ " Donuts";
    donutCounter();
})
resetBtn.addEventListener("click", ()=>{
    location.reload();
})
//Cosmetics
defaultDonutBtn.addEventListener("click", ()=>{
    equipSound();
    theDonutEl.src="/gfx/donutStart.png";
    isFrodonutEquipped = false;
    isSpaceEquipped = false;
})
frodoBtn.addEventListener("click", ()=> {
    if(donutMaker.frodonut == false){
        purchaseSound()
        donutMaker.unlockFrodonut();
        frodoBtn.innerText="Equip the Frodonut";
        frodoBtn.disabled=false;
    } else{
        equipSound();
        theDonutEl.src="/gfx/Frodonut.png";
        isFrodonutEquipped = true;
        isSpaceEquipped = false;
    }
})
greenBtn.addEventListener("click", ()=> {
    if(donutMaker.greenDonut == false){
        purchaseSound()
        donutMaker.unlockGreenDonut();
        greenBtn.innerText="Equip Green Donut";
        greenBtn.disabled=false;
    } else{
        equipSound();
        theDonutEl.src="/gfx/donutGreen.png";
        isFrodonutEquipped = false;
        isSpaceEquipped = false;
    }
})
blueBtn.addEventListener("click", ()=> {
    if(donutMaker.blueDonut == false){
        purchaseSound()
        donutMaker.unlockBlueDonut();
        blueBtn.innerText="Equip Blue Donut";
        blueBtn.disabled=false;
    } else{
        equipSound();
        theDonutEl.src="/gfx/donutBlue.png";
        isFrodonutEquipped = false;
        isSpaceEquipped = false;
    }
})
redBtn.addEventListener("click", ()=> {
    if(donutMaker.redDonut == false){
        purchaseSound()
        donutMaker.unlockRedDonut();
        redBtn.innerText="Equip Red Donut";
        redBtn.disabled=false;
    } else{
        equipSound();
        theDonutEl.src="/gfx/donutRed.png";
        isFrodonutEquipped = false;
        isSpaceEquipped = false;
    }
})
cosmicBtn.addEventListener("click", ()=> {
    if(donutMaker.cosmicDonut == false){
        purchaseSound()
        donutMaker.unlockCosmicDonut();
        cosmicBtn.innerText="Equip Cosmic Donut";
        cosmicBtn.disabled=false;
    } else{
        equipSound();
        theDonutEl.src="/gfx/donutSpace.png";
        isFrodonutEquipped = false;
        isSpaceEquipped = true;
    }
})
donutBgBtn.addEventListener("click", ()=>{
    equipSound();
    backgroundEl.style.backgroundImage="url('/gfx/donutBG.png')";
    backgroundEl.style.backgroundSize="15vw";
    backgroundEl.style.backgroundPosition= "center";

})
rainbowBtn.addEventListener("click", ()=> {
    if(donutMaker.rainbowBG == false){
        purchaseSound()
        donutMaker.unlockRainbowBG();
        rainbowBtn.innerText="Taste the Rainbow!";
        rainbowBtn.disabled=false;
    } else{
        equipSound();
        backgroundEl.style.backgroundImage="linear-gradient(to right, white, red, orange, yellow, green, blue, indigo, violet, white)";
        backgroundEl.style.backgroundSize="cover";
    }
})
shopBtn.addEventListener("click", ()=> {
    if(donutMaker.shopBG == false){
        purchaseSound()
        donutMaker.unlockShopBG();
        shopBtn.innerText="Make Donuts at the Shop!";
        shopBtn.disabled=false;
    } else{
        equipSound();
        backgroundEl.style.background="url('/gfx/donutshop1.png')";
        backgroundEl.style.backgroundSize="cover";
        backgroundEl.style.backgroundPosition= "center";
    }
})
forestBtn.addEventListener("click", ()=> {
    if(donutMaker.forestBG == false){
        purchaseSound()
        donutMaker.unlockForestBG();
        forestBtn.innerText="Explore the Woods...with Donuts!";
        forestBtn.disabled=false;
    } else{
        equipSound();
        backgroundEl.style.background="url('/gfx/forestBG1.png')";
        backgroundEl.style.backgroundSize="cover";
    }
})
beachBtn.addEventListener("click", ()=> {
    if(donutMaker.beachBG == false){
        purchaseSound()
        donutMaker.unlockBeachBG();
        beachBtn.innerText="Relax with Beach Donuts!";
        beachBtn.disabled=false;
    } else{
        equipSound();
        backgroundEl.style.background="url('/gfx/beachBG.png')";
        backgroundEl.style.backgroundSize="cover";
    }
})
spaceBtn.addEventListener("click", ()=> {
    if(donutMaker.spaceBG == false){
        purchaseSound()
        donutMaker.unlockSpaceBG();
        spaceBtn.innerText="Make Donuts in Space!";
        spaceBtn.disabled=false;
    } else{
        equipSound();
        backgroundEl.style.background="url('/gfx/spaceBG.png')";
        backgroundEl.style.backgroundSize="cover";
    }
})



//Debug
const debug1Btn = document.querySelector("#debug1k")
const debug2Btn = document.querySelector("#debug10k")
const debug3Btn = document.querySelector("#debug100k")
const debug4Btn = document.querySelector("#debug1m")
debug1Btn.addEventListener("click", ()=>{
    donutMaker.setDonuts=donutMaker.totalDonuts+1000;    
    donutCounter();
})
debug2Btn.addEventListener("click", ()=>{
    donutMaker.setDonuts=donutMaker.totalDonuts+10000;    
    donutCounter();
})
debug3Btn.addEventListener("click", ()=>{
    donutMaker.setDonuts=donutMaker.totalDonuts+100000;    
    donutCounter();
})
debug4Btn.addEventListener("click", ()=>{
    donutMaker.setDonuts=donutMaker.totalDonuts+1000000;
    donutCounter();
})