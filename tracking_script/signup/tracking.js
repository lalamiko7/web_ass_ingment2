var mouseClicks, timeSpent;


//on window load
window.onload = function() {
    //initialize variables
    mouseClicks = 0;
    timeSpent = Date.now();

    //fetch all input fields
}

function calculate() {
    console.log("time spent", (Date.now() - timeSpent) / 1000 + "seconds");
}