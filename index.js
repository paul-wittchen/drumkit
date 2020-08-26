//CLOCK
setDate = () => {
    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const timeNow = new Date();
    const seconds = timeNow.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = timeNow.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = timeNow.getHours();
    const hoursDegree = ((hours / 24) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

};

setInterval(setDate, 1000);


//DRUMKIT
window.addEventListener('keydown', (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return;
    key.classList.add('active')
    audio.play();
    audio.currentTime = 0;
    setTimeout(function(){ 
        key.classList.remove('active')
    }, 150);
});


//CONTROLS

const controls = document.querySelectorAll('.controls input');

function handleUpdate() {
    document.documentElement.style.setProperty(`--${this.name}`, this.value)
};

controls.forEach(control => control.addEventListener('change', handleUpdate));
controls.forEach(control => control.addEventListener('mousemove', handleUpdate));