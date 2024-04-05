d
ocument.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.project a');
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectInfo = e.target.parentElement;
            // Simplesmente mostrar um alerta com o nome do projeto
            alert(`Detalhes de ${projectInfo.querySelector('h2').innerText}`);
        });
    });
});