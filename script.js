document.getElementById('play-button').addEventListener('click', function() {
    var errorMessage = document.getElementById('error-message');
    errorMessage.classList.remove('hidden');

    setTimeout(function() {
        errorMessage.classList.add('hidden');
    }, 3000);
});
