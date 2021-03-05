function timer(timerSelector, daysSelector, housSelector, minutesSelector, secondsSelector, deadline) {
    function getTime(endtime) {
        const now = new Date();
        const end = new Date(endtime);
        const total = end - now;

        const seconds = Math.floor((total/1000) % 60);
        const minutes = Math.floor((total/1000/60) % 60);
        const hours = Math.floor((total/1000/60/60) % 24);
        const days = Math.floor((total/1000/60/60/24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds 
        };
    }

    function fixZero(num) {
        if (num >=0 && num <= 9) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    

    function initTimer() {
        function updateTimer() {
            const currentTime = getTime(deadline); 
            
            if (currentTime.total <= 0) {
                clearInterval(timerInterval);

                daysElem.innerText = fixZero(0);
                hoursElem.innerText = fixZero(0);
                minutesElem.innerText = fixZero(0);
                secondsElem.innerText = fixZero(0);                
            } else {
                daysElem.innerText = fixZero(currentTime.days);
                hoursElem.innerText = fixZero(currentTime.hours);
                minutesElem.innerText = fixZero(currentTime.minutes);
                secondsElem.innerText = fixZero(currentTime.seconds);
            }
        }

        const timer = document.querySelector(timerSelector);
        const daysElem = timer.querySelector(daysSelector);
        const hoursElem = timer.querySelector(housSelector);
        const minutesElem = timer.querySelector(minutesSelector);
        const secondsElem = timer.querySelector(secondsSelector);    

        const timerInterval = setInterval(updateTimer, 1000);

        updateTimer();
    }

    initTimer();
}

export default timer;