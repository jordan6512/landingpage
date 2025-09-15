// Jahr im Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Nav
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle && navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Formular → öffnet Mailprogramm mit vorausgefüllter Mail
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById('name').value.trim());
  const email = encodeURIComponent(document.getElementById('email').value.trim());
  const message = encodeURIComponent(document.getElementById('message').value.trim());
  const subject = encodeURIComponent('Website-Anfrage von ' + (name || 'Interessent'));
  const body = encodeURIComponent(`Name: ${decodeURIComponent(name)}\nE-Mail: ${decodeURIComponent(email)}\n\n${decodeURIComponent(message)}`);
  window.location.href = `mailto:dein@email.de?subject=${subject}&body=${body}`;
});
