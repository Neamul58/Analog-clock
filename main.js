let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    let hrRotation = 30*hh + mm/2;
    let minRotation = 6*mm + ss/10;
    let secRotation = 6*ss;
    
    hr.style.transform = `rotate(${hrRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    sec.style.transform = `rotate(${secRotation}deg)`;
}
setInterval(displayTime, 1000);

/*
Note:
=====~~~~ For Hours Rotation Calculation: ~~~~=====
12 hours = 360deg
1 hour = (360/12)deg = 30deg

    ==== For Minutes Hour's Bar will Forward to =====
60min = 30deg
1 min = (30/60)deg = (1/2)deg
m min = (1/2)m deg

So, h hours = 30h + (m/2);

=====~~~~ For Minutes Rotation Calculation: ~~~~=====
60 min = 360deg
1 min = (360/60)deg = 6deg
    ==== For Second Minute's Bar will Forward to ===== 
60 sec = 6deg
1 sec = (6/60)deg = (1/10)deg
s sec = (s/10)deg

So, m min = 6m + (s/10);

=====~~~~ For Seconds Rotation Calculation: ~~~~=====
60sec = 360deg
1 sec = (360/60)deg = 6deg
s sec = 6s
*/