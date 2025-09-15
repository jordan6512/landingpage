// Jahr im Footer automatisch setzen
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Navigation Toggle für kleine Bildschirme
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Kontaktformular: öffnet Mailprogramm mit vorausgefüllter deutscher Mail
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent('Website-Anfrage von ' + (name || 'Interessent'));
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`
    );

    window.location.href = `mailto:jordan.k2000@icloud.com?subject=${subject}&body=${body}`;
  });
}
