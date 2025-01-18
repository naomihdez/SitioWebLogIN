document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;

    //Cambiar el ícono o texto del botón
    this.textContent = type === 'password' ? '👁️' : '🙈';
});