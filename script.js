const container = document.querySelector('.container');
const viewsCounter = document.getElementById('views');

let views = 0;

container.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const { offsetWidth, offsetHeight } = container;

    const xRotation = ((clientY / offsetHeight) - 0.5) * 10;
    const yRotation = ((clientX / offsetWidth) - 0.5) * -10;

    container.style.transition = 'transform 0.1s ease';
    container.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});

container.addEventListener('mouseleave', () => {
    container.style.transition = 'transform 0.5s ease';
    container.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

// Increase views count
function increaseViewCount() {
    views++;
    viewsCounter.textContent = views;
}

increaseViewCount();
