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

(function() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;
    const slides = track.querySelectorAll('.carousel-slide');
    const dotsContainer = document.querySelector('.carousel-dots');
    let current = 0;
    let timer;

    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Valor ' + (i + 1));
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function goTo(index) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }

    document.querySelector('.carousel-btn.prev')?.addEventListener('click', () => { goTo(current - 1); resetTimer(); });
    document.querySelector('.carousel-btn.next')?.addEventListener('click', () => { goTo(current + 1); resetTimer(); });

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(() => goTo(current + 1), 5000);
    }

    timer = setInterval(() => goTo(current + 1), 5000);
})();
