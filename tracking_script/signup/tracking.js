var mouseClicks, timeSpent, charsTyped, keysPressed;

//on window load
window.onload = function() {
    //initialize variables
    mouseClicks = 0;
    timeSpent = Date.now();
    keysPressed = 0;
    charsTyped = 0;
    //add event listeners
    //keyPress detects typed characters only
    window.addEventListener('keypress', () => {
        keysPressed++;
    });
    //keyDown detects any key press
    window.addEventListener('keydown', () => {
        charsTyped++;
    });
    //mouseup detects mouse clicks
    window.addEventListener("mouseup", () => {
        mouseClicks++;
    });
}

//updates the hidden div with the correct data and makes it visible
function calculate() {
    document.getElementById("hidden").innerText = "time spent " + (Date.now() - timeSpent) / 1000 
     + " seconds\ntotal clicks: " + mouseClicks 
     + " clicks\nTotal key presses: " + keysPressed
     + "\nTotal chars typed: " + charsTyped;
    document.getElementById("hidden").style.visibility = "visible";
}