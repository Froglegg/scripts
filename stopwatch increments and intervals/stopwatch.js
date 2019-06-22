//  Interval Exercise (follow the instructions below).
//using set interval, set timeout, cleartimeout clear interval 
//  This code will run as soon as the page loads.
window.onload = function() {
    $("#lap").on("click", recordLap);
    $("#stop").on("click", stop);
    $("#reset").on("click", reset);
    $("#start").on("click", start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 0;
var lap = 0;

function reset() {

    time = 0;
    lap = 0;
    console.log(timeConverter(time));
    $("#display").html(timeConverter(time));
    $("#laps").empty();
}

function start() {

    if (!clockRunning) {
        clearInterval(intervalId);
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }

}

function stop() {
    if (clockRunning) {
        clearInterval(intervalId);
        clockRunning = false;
    }
}

function recordLap() {
    var lapTime = timeConverter(time);
    lap++;
    $("#laps").append("<div>Lap " + lap + ":" + lapTime + "</div>");


    //  TODO: Get the current time, pass that into the timeConverter function,
    //        and save the result in a variable.

    //  TODO: Add the current lap and time to the "laps" div.

    //  TODO: Increment lap by 1. Remember, we can't use "this" here.
}

function count() {

    time++;
    var currentTime = timeConverter(time);
    $("#display").html(currentTime);
}

//  THIS FUNCTION IS DONE FOR US!
//  We do not need to touch it.

function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}