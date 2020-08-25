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