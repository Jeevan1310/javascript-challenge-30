function startCountdown() {
    var time = document.getElementById("timeInput").value;
    var countdown = document.getElementById("countdown");
    
    // Convert time to milliseconds
    var milliseconds = time * 1000;
    
    var interval = setInterval(function() {
        // Convert milliseconds to minutes and seconds
        var minutes = Math.floor(milliseconds / 60000);
        var seconds = ((milliseconds % 60000) / 1000).toFixed(0);
        
        // Display the countdown
        countdown.innerHTML = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        
        // Stop the countdown when it reaches 0
        if (milliseconds <= 0) {
            clearInterval(interval);
            countdown.innerHTML = "Countdown Complete!";
        }
        
        milliseconds -= 1000;
    }, 1000);
}
