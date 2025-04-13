const secondsHand = document.querySelector('.sec');
const minutesHand = document.querySelector('.min');
const hoursHand = document.querySelector('.hour');

function getTime() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegree = ((seconds / 60) * 360) - 90;
    const minutesDegree = ((minutes / 60) * 360) - 90 + (seconds / 10);
    const hoursDegree = ((hours / 12) * 360) - 90 + (minutes / 2);

    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
    minutesHand.style.transform = `translateY(-4px) rotate(${minutesDegree}deg)`;
    hoursHand.style.transform = `translateY(-21px) rotate(${hoursDegree}deg)`;
}

setInterval(getTime, 1000);