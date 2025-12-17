
let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById('sec');

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
For Hours Rotation Calculation:
12 hours = 360 deg
1 hour = 
*/