document.getElementsByClassName('bal')[0].style= "left:" + Math.random() * (1400 - 0) + 0 + "px";
const ball = document.getElementsByClassName('bal')[0];
ball.addEventListener('mousemove', event => {
    const ballPosition = event.clientX;
    const cursor = ball.offsetWidth / 2;
    ball.style='left: ' + (ballPosition - cursor) + 'px';
})

ball.addEventListener('mouseout', event => {
    const ballOutPosition = event.clientX;
    const cursor = ball.offsetWidth / 2;
    ball.style='left: ' + (ballOutPosition - cursor) + 'px';
})

ball.addEventListener('click', event => {
    const windowHeight = document.querySelector('body').clientHeight;
    console.log(windowHeight);
    ball.style='top: -' + windowHeight + 'px';
})

document.getElementById("imaaaga").innerHTML = '<img src="ball.png" width="50" height="50" />';