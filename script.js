
document.getElementById('year').textContent = new Date().getUTCFullYear();
function openMail(e) {
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById('name').value.trim());
  const email = encodeURIComponent(document.getElementById('email').value.trim());
  const message = encodeURIComponent(document.getElementById('message').value.trim());
  const to = 'you@example.com'; // <-- replace with your email
  const subject = encodeURIComponent('Portfolio contact from ' + name);
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}
