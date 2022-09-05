var h = document.getElementById("hours");
var m = document.getElementById("minutes")
var s = document.getElementById("seconds")

setInterval(function()
{
        date = new Date();
        htime = date.getHours();
        mtime = date.getMinutes();
        stime = date.getSeconds();

        hrotation = 30*htime + mtime/ 2;
        mrotation = 6*mtime;
        srotaion = 6*stime;

        h.style.transform = `rotate(${hrotation}deg)`;
        m.style.transform = `rotate(${mrotation}deg)`;
        s.style.transform = `rotate(${srotaion}deg)`;
        
},1000);

