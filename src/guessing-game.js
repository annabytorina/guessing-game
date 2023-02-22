class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minV = min;
        this.maxV = max;
    }

    guess() {    

        return this.mid = Math.round((this.minV + this.maxV)/2);
            /*if (this.mid === this.number) {
                return this.mid;
            } /*else {
                if (this.mid > this.number) {
                    return this.greater();
                } else {
                    return this.lower();
                }
            }*/
        
    }

    lower() {
        return this.maxV = this.mid;
        
    }

    greater() {
        return this.minV = this.mid;
    }    
}

module.exports = GuessingGame;


