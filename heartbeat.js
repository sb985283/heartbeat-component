class Heartbeat {

    constructor(onFlashRate=1000, offFlashRate=500) {
        this._element = document.createElement('div');
        this._intervalId = null;
        this.onFlashRate = onFlashRate;
        this.offFlashRate = offFlashRate;
    }
        
    on() {
        clearInterval(this._intervalId);
        this._element.classList.remove('off');
        this._intervalId = setInterval(() => {
            this._element.classList.toggle('on');
        }, this.onFlashRate);
    }

    off() {
        clearInterval(this._intervalId);
        this._element.classList.remove('on');
        this._intervalId = setInterval(() => {
            this._element.classList.toggle('off');
        }, this.offFlashRate);
    }

    get element() {
        return this._element;
    }
}
