//New Year Date
const newYearDate = new Date("Dec, 25 2021").getTime();
//Countdown

// DOM
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
    



function countDown () {


    //const newYearDate = new Date(newYear).getTime();
    const currentYearDate = new Date().getTime();

    //Date Difference

    const dateDifference = newYearDate-currentYearDate;

    
    //Days
    const days = Math.floor(dateDifference/(1000*60*60*24));
    //hours
    const hours = Math.floor((dateDifference/(1000*60*60))%24);
    //minutes
    const minutes = Math.floor((dateDifference/(1000*60))%60);
    //seconds
    const seconds = Math.floor((dateDifference/(1000))%60);


    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime (hours);
    minutesElement.innerHTML = formatTime (minutes);
    secondsElement.innerHTML = formatTime (seconds);
    

    function formatTime (time) {
        return time < 10? "0" + time: time;
        
    }

       
    

}

//Initial call
countDown();
//Time Interval

setInterval(countDown, 1000);

