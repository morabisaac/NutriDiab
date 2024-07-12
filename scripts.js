document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Alert message for "Comienza Ahora" button
    document.getElementById('comienza-ahora').addEventListener('click', function (e) {
        alert('Redirigiendo a la página de registro...');
    });
});
