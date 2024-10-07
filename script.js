const container = document.querySelector('.container');

let xRotation = 0;
let yRotation = 0;
let targetXRotation = 0;
let targetYRotation = 0;

container.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const { offsetWidth, offsetHeight } = container;

    targetXRotation = ((clientY / offsetHeight) - 0.5) * 20; 
    targetYRotation = ((clientX / offsetWidth) - 0.5) * -20; 
});

function updateRotation() {
    xRotation += (targetXRotation - xRotation) * 0.1; 
    yRotation += (targetYRotation - yRotation) * 0.1; 

    container.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

    requestAnimationFrame(updateRotation); 
}

container.addEventListener('mouseleave', () => {
    xRotation = 0; 
    yRotation = 0; 
    container.style.transition = 'transform 0.5s ease';
});

updateRotation(); 

document.getElementById('play-button').addEventListener('click', function() {
    var errorMessage = document.getElementById('error-message');
    errorMessage.classList.remove('hidden');

    setTimeout(function() {
        errorMessage.classList.add('hidden');
    }, 3000);
});
