const form = document.getElementById('contactForm');
if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const mensaje = document.getElementById('mensaje')?.value.trim();
        if(!nombre || !email) {
            alert('Por favor, completa tu nombre y correo electrónico.');
            return;
        }
        alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje. En breve un asesor de Capital Construcciones SRL se comunicará contigo.`);
        form.reset();
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if(href === "#" || href === "") return;
        const target = document.querySelector(href);
        if(target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log("Landing page Capital Construcciones - servicios integrales en construcción y mantenimiento.");
