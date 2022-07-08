class DonutMaker{
    constructor(){
        this.donutCount = 0;
        this.clickers = 1;
        this.clickMultiplier=1;
        this.autoClicks=0;
        this.autoClickCost =100;
        this.multiplierCost = 10;
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

    addDonut(){
        this.donutCount+= this.clickers*this.clickMultiplier;
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
            this.clickMultiplier*=1.2;
            this.donutCount -= this.multiplierCost;
            this.multiplierCost *= 1.1;
        } 
    }
}

export default DonutMaker;