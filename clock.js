//interval function to iterate output
setInterval(function(){
    /*date, hour, minutes, seconds variables*/
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    
    /*
    ---------xxxx-----------------
    explanation:
    ---- for hour hands ----,
    12 hours = 360 rotation
    therefore, h hours = (30 deg * h)
    1. swap of minute hand in an hour,
    60 min = 30 deg
    therefore, m minutes = m / 2 deg
    2. swap of seconds hand in an hour,
    3600 seconds = 30 deg
    therefore, s seconds = s / 120 deg

    summing up, total degree of rotation for hour hand
    hour hand degree = (30 deg * h) + (m/2 deg) + (s/120 deg)

    -------
    ------ for minutes hand ------
    60 minutes take 360 degree
    therefore, m seconds = 6 * m deg
    1. swap of second hand with it
    60 seconds = 6 deg
    therefore, for s seconds = s/10 deg

    total degree of rotation for minute hand = (6*m)+(s/10)
    ----------
    ----------for second hand-------
    60 seconds take 360 deg
    therefore, degree of rotation for second hand for s second = 6*s

    -------------xxx---------------
    */

    //degrees of rotation for hour, min and sec hands
    var hourRot = (30*h)+(m/2)+(s/120);
    var minRot = (6*m)+(s/10);
    var secRot = 6*s;

    //variables for analog and digital clock
    var hour = document.querySelector(".hour");
    var minute = document.querySelector(".minute");
    var second = document.querySelector(".second");
    var hourDigi = document.querySelector(".hours");
    var minuteDigi = document.querySelector(".minutes");
    var secondDigi = document.querySelector(".seconds");

    //analog clock print
    hour.style.transform =`rotate(${hourRot}deg)`;
    minute.style.transform =`rotate(${minRot}deg)`;
    second.style.transform =`rotate(${secRot}deg)`;
    
    //condition for min or sec in single digit
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s: s;

    //digital clock print
    hourDigi.innerHTML = h + " : ";
    minuteDigi.innerHTML = m + " : ";
    secondDigi.innerHTML = s;
},1000);