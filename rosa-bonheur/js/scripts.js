document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const loginButton = document.querySelector('.login-button');
    
    // Validation du formulaire de connexion
    loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        const username = document.querySelector('.username').value;
        const password = document.querySelector('.password').value;

        if (validateCredentials(username, password)) {
            alert('Connexion réussie ! Vous pouvez maintenant créer de nouveaux projets.');
            // Logique pour créer de nouveaux projets
        } else {
            alert('Identifiants incorrects. Veuillez réessayer.');
        }
    });
});

function validateCredentials(username, password) {
    // Remplacez cette logique par une vérification réelle des identifiants
    return username === 'admin' && password === 'password';
}