class GuessingGame {
    constructor(number) {
        this.number = number;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        if (this.min <= this.max) {
            this.mid = Math.floor((this.min + this.max)/2);
            if (this.mid === this.number) {
                return this.mid;
            } else {
                if (this.mid > this.number) {
                    return this.greater();
                } else {
                    return this.lower();
                }
            }
        } else {
            return -1;
        }
    }

    lower() {
        this.min = this.mid + 1;
        return this.guess();
    }

    greater() {
        this.max = this.mid - 1;
        return this.guess();
    }
}

module.exports = GuessingGame;
