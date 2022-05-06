onmessage = function(e) {
    try {
        this.postMessage(eval(e.data));
    } catch(e) {
        this.postMessage(false);
    }
}