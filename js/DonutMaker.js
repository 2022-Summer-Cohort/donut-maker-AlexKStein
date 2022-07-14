class DonutMaker{
    constructor(){
        this.donutCount = 0;
        this.clickers = 1;
        this.clickMultiplier=1;
        this.autoClicks=0;
        this.autoClickCost =50;
        this.multiplierCost = 500;
        this.clickCost = 10;
    }
   
    get clickRate(){
        return this.clickers;
    }
    get multiplier(){
        return this.clickMultiplier;
    }
    get totalDonuts() {
        return this.donutCount;
    }
    set setDonuts(x){
        this.donutCount = x;
    }
    get autoClickers(){
        return this.autoClicks;
    }
    get mCost(){
        return this.multiplierCost;
    }
    get autoCost(){
        return this.autoClickCost;
    }
    get upgradeClickCost(){
        return this.clickCost
    }
    
    addDonut(){
        this.donutCount+= this.clickers*this.clickMultiplier;
    }
    addClicks(){
        if(this.donutCount>=this.clickCost){
            this.clickers++;
            this.donutCount -=this.clickCost;
            this.clickCost*=1.5;
        }
    }
    addAutoClicks(){
        if (this.donutCount>=this.autoClickCost){
            this.autoClicks++;
            this.donutCount -=this.autoClickCost;
            this.autoClickCost *=1.1;
        }
    }
    activateAutoClicks(){
        this.donutCount+=this.autoClicks*this.clickMultiplier;
    }
    addClickMultiplier(){
        if(this.donutCount>=this.multiplierCost){ 
            this.clickMultiplier+=1;
            this.donutCount -= this.multiplierCost;
            this.multiplierCost *= 2;
        } 
    }
    frodonut=new Boolean(false);
    greenDonut=new Boolean(false);
    blueDonut=new Boolean(false);
    redDonut=new Boolean(false);
    cosmicDonut=new Boolean(false);
    unlockFrodonut(){
        this.donutCount -=10;
        this.frodonut=true;
    }
    unlockGreenDonut(){
        this.donutCount -=500;
        this.greenDonut=true;
    }
    unlockBlueDonut(){
        this.donutCount -=2500;
        this.blueDonut=true;
    }
    unlockRedDonut(){
        this.donutCount -=10000;
        this.redDonut=true;
    }
    unlockCosmicDonut(){
        this.donutCount -=100000;
        this.cosmicDonut=true;
    }
    shopBG=new Boolean(false);
    rainbowBG=new Boolean(false);
    forestBG=new Boolean(false);
    beachBG=new Boolean(false);
    spaceBG=new Boolean(false);
    unlockRainbowBG(){
        this.donutCount-=25;
        this.rainbowBG=true;
    }
    unlockShopBG(){
        this.donutCount-=100;
        this.shopBG=true;
    }
    unlockForestBG(){
        this.donutCount-=1000;
        this.forestBG=true;
    }
    unlockBeachBG(){
        this.donutCount-=10000;
        this.beachBG=true;
    }
    unlockSpaceBG(){
        this.donutCount -=100000;
        this.spaceBG=true;
    }

}

export default DonutMaker;