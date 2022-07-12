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
}

export default DonutMaker;