
var endThisYear = 'Sat Dec 31 2017 23:59:59 GMT+0530 (India Standard Time)';

function leftTimeToNewYear(endThisYear){
    var j = Date.parse(endThisYear);  
    var k = Date.parse(new Date());
    var t = j-k;

  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

//leftTimeToNewYear(endThisYear).seconds
// we can call it easily

function startClock(endThisYear){
    var clock = document.getElementById("clockdiv");
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock(){
         var t = leftTimeToNewYear(endThisYear);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    //var timeInterval = setInterval(function(){

        if(t.total <= 0){
            var newyear =document.getElementById("2017");
            newyear.innerHTML="Happy New Year 2017"
            clearInterval(timeinterval);
            zerozero();
        }

   }
   updateClock();
   var timeinterval = setInterval(updateClock, 1000);
}
//var endThisYear = new Date(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000);
startClock(endThisYear);

var AfterYearComplication = document.getElementById("AfterYearComplication");
AfterYearComplication.style.visibility="hidden";
function zerozero(){
    AfterYearComplication.style.visibility="visible";
    var abc =document.getElementById("welcomeToNewYear");
    abc.innerHTML=`Hello ${whatsYourname} Welcome to 2017! Enjoy`;
}

window.onload = function(){
    var nameOfPerson = document.getElementById("nameOfPerson");
    var whatsYourname = prompt("Welcome, what is your name ?").toUpperCase();
     nameOfPerson.innerHTML = `WELCOME ${whatsYourname}`;
     nameOfPerson.style.color="red";
     
}
