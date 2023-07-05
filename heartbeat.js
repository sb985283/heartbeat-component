class Heartbeat {

    constructor() {
        this._element = document.createElement('div');
        this._intervalId = null;
    }
        
    on() {
        clearInterval(this._intervalId);
        this._element.classList.remove('off');
        this._intervalId = setInterval(() => {
            this._element.classList.toggle('on');
        }, 2000);
    }

    off() {
        clearInterval(this._intervalId);
        this._element.classList.remove('on');
        this._intervalId = setInterval(() => {
            this._element.classList.toggle('off');
        }, 1000);
    }

    get element() {
        return this._element;
    }
}