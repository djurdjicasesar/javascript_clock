var hourHand = document.getElementById('hourHand');
var minuteHand = document.getElementById('minuteHand');
var secondsHand = document.getElementById('secondsHand');

function initClock(){
  var date = new Date();
  var hour = date.getHours() % 12; //0-23 hours
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var hourDeg = (hour * 30) + (0.5 * minute);
  var minuteDeg = (minute * 6) + (0.1 * second);
  var secondDeg = second * 6;

  hourHand.style.transform="rotate(" + hourDeg + "deg)";
  minuteHand.style.transform ="rotate(" + minuteDeg + "deg)";
  secondsHand.style.transform = "rotate(" + secondDeg + "deg)";

  setTimeout(initClock, 1000);

};
initClock();
