const form = document.getElementById('contactForm');
if(form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const status = document.getElementById('formStatus');
        const button = form.querySelector('button');
        if(!nombre || !email) {
            alert('Por favor, completa tu nombre y correo electrónico.');
            return;
        }
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                status.textContent = '¡Gracias! Tu mensaje fue enviado. Te contactaremos pronto.';
                status.style.color = '#2e7d32';
                form.reset();
            } else {
                status.textContent = 'Hubo un error al enviar. Intenta de nuevo o contáctanos por WhatsApp.';
                status.style.color = '#c62828';
            }
        } catch {
            status.textContent = 'Error de conexión. Intenta de nuevo.';
            status.style.color = '#c62828';
        }
        button.disabled = false;
        button.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar consulta';
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
