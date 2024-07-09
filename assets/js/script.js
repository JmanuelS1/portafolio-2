let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible =  false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible  = true;
    }
}

function seleccionar(){
//oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    let activeLink = document.querySelector('.nav-link.active');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            if (link === activeLink) return;

            const target = link.getAttribute('data-target');
            const previousTarget = activeLink ? activeLink.getAttribute('data-target') : null;

            if (previousTarget) {
                const previousActiveItem = document.querySelector(`.nav-link[data-target="${previousTarget}"]`);
                previousActiveItem.classList.remove('active');
            }

            link.classList.add('active');
            activeLink = link;

            gsap.fromTo(".nav-link.active::after", 
                { width: 0, background: 'transparent' },
                { width: '100%', background: '#0f0', duration: 0.5, ease: "power1.inOut" }
            );
        });
    });
});






