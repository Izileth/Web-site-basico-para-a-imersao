// Add JavaScript code here for animations or other interactive features
// Example: Fade-in effect on hover
const sections = document.querySelectorAll('section');

sections.forEach(section => {
  section.addEventListener('mouseover', function() {
    section.classList.add('fade-in');
  });
  section.addEventListener('mouseout', function() {
    section.classList.remove('fade-in');
  });
});

// Add more animations or interactions as desired
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('nav a');

  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Impede o comportamento padrão do link
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // Animação suave até a seção
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Aqui você pode adicionar lógica para validar o formulário e enviar os dados para um servidor
  // Por exemplo, utilizando AJAX ou fetch API

  alert('Mensagem enviada com sucesso!'); // Mensagem de sucesso após o envio
});
