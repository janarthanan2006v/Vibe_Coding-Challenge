// Dark Mode Toggle
const darkModeBtn = document.getElementById('darkModeToggle');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Accordion
const accordions = document.querySelectorAll('.accordion-button');
accordions.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Form Submission
const form = document.getElementById('feedbackForm');
const formResponse = document.getElementById('formResponse');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  formResponse.textContent = `Thank you, ${name}! Your message has been received.`;
  form.reset();
});
