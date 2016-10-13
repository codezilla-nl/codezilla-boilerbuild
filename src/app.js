import Main from "./classes/Main.js"

class App {
    constructor() {
        new Main();
    }
}

// Start after page has been loaded
window.onload = function() {
    new App();
}