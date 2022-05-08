function clock(){
const time = new Date();

var hours = time.getHours();
var minutes = time.getMinutes();
var seconds= time.getSeconds();
var am_or_pm = document.getElementById('am_or_pm');


if (hours <10) {
    hours  = "0" + hours;
}
if (minutes <10) {
  minutes = "0" + minutes;
}
if (seconds <10) {
seconds = "0" + seconds;
}

if(hours >= 12){
    am_or_pm.innerHTML = "PM";
 }else{
     am_or_pm.innerHTML = "AM";
 }


document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

}
setInterval(clock,100);




function calander(){
    const today = new day();
   const day = today.getDay();
   const month = today.getMonth();
   const date = today.getDate();
   const year= today.getFullYear();


document.write("day").innerHTML = day;
document.getElementsById("month").innerHTML = month;

return (`${"day"}, ${"month"} ${"date"} ${"year"}`);
}

var display = day ["Sunday", "Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday"];

var display = month["January","February","March", "April", "May", "June", "July","August", "September","October","November","December"];





