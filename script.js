const container = document.querySelector('.container');
const playButton = document.getElementById('play-button');
const errorMessage = document.getElementById('error-message');
const newsMessage = document.getElementById('news-message');
const homeButton = document.getElementById('home-button');
const newsButton = document.getElementById('news-button');

homeButton.addEventListener('click', () => {
    container.classList.remove('hidden');
    errorMessage.classList.add('hidden');
    newsMessage.classList.add('hidden');
});

newsButton.addEventListener('click', () => {
    container.classList.add('hidden');
    errorMessage.classList.add('hidden');
    newsMessage.classList.remove('hidden');
});

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

playButton.addEventListener('click', () => {
    errorMessage.classList.remove('hidden');
    setTimeout(() => {
        errorMessage.classList.add('hidden');
    }, 3000);
});
