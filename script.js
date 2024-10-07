const container = document.querySelector('.container');
const playButton = document.getElementById('play-button');
const errorMessage = document.getElementById('error-message');

container.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const { offsetWidth, offsetHeight } = container;

    const xRotation = ((clientY / offsetHeight) - 0.5) * 10; // Max rotation reduced to 10 degrees
    const yRotation = ((clientX / offsetWidth) - 0.5) * -10; // Max rotation reduced to -10 degrees

    container.style.transition = 'transform 0.1s ease'; // Faster transition for rotation
    container.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});

container.addEventListener('mouseleave', () => {
    container.style.transition = 'transform 0.5s ease'; // Transition back
    container.style.transform = 'rotateX(0deg) rotateY(0deg)'; // Reset rotation
});

playButton.addEventListener('click', () => {
    errorMessage.classList.remove('hidden');
    setTimeout(() => {
        errorMessage.classList.add('hidden');
    }, 3000); // Fade the message out after 3 seconds
});
