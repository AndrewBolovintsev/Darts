document.getElementsByClassName('bal')[0].style= "left:" + Math.random() * (1400 - 0) + 0 + "px";
const ball = document.getElementsByClassName('bal')[0];
const popalText = document.querySelector('.popados');

ball.addEventListener('mousemove', event => {
    const ballPosition = event.clientX;
    const cursor = ball.offsetWidth / 2;
    ball.style='left: ' + (ballPosition - cursor) + 'px';
    ball.addEventListener('click', () => {
        ball.style='top: 45px; left: ' + (ballPosition - cursor) + 'px; width: 25px; height: 25px;';
        const ballImage = document.querySelector('.ball-image');
        ballImage.style='top: 45px; left: ' + (ballPosition - cursor) + 'px; width: 25px; height: 25px;';
        console.log(ball.style.left);
        if (ball.style.left >= '670px' && ball.style.left <= '770px' && ball.style.top == '45px') {
            popalText.style='opacity: 1;';
        }
    })
})