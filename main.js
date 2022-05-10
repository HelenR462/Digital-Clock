function clock(){
 const today = new Date();

 var hours = today.getHours();
 var minutes = today.getMinutes();
 var seconds= today.getSeconds();
 var am_or_pm = document.getElementById('am_or_pm');

 const timeDisplay = document.getElementsByClassName('time-display');
 timeDisplay.textContent =`${"hour"}, ${"minutes"} ${"seconds"} ${"hr >= 12"? 'PM':'AM'}`;
 
 const day = getDayByIndex(today.getDay());
 const month = getMonthByIndex(today.getMonth());
 const date = addDateSuffix(today.getDate());
 const year= today.getFullYear();

 const calanderDisplay = document.getElementsByClassName('calander-display');
calanderDisplay.textContent =
`${"day"}, ${"month"} ${"date"} ${"year"}`;



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



document.getElementById("day").innerHTML = day + ",";
document.getElementById("month").innerHTML = month;
document.getElementById("date").innerHTML = date;
document.getElementById("year").innerHTML = year;

}

setInterval(clock,100);


  function addDateSuffix(date){
  if (date === [1,21,31]) {
     return date + "st" ;
}
  if (date === [2,22]) {
        return date + "nd";
}
  if (date === [3,23]) {
        return date + "rd";
}else{
       return date + "th";
 }

  }

function getDayByIndex(index){
 const day =  ["Sunday", "Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday"];

 return day[index];
}

function getMonthByIndex(index){
  const month =  ["January","February","March", "April", "May", "June", "July","August", "September","October","November","December"];
  
  return month[index];
}


