// script.js

// Dynamic year update in the footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });
  
  // Contact form validation
  const validateForm = () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let errorMessage = '';
  
    if (!name) {
      errorMessage += 'Name is required.\n';
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errorMessage += 'A valid email is required.\n';
    }
  
    if (!message) {
      errorMessage += 'Message cannot be empty.\n';
    }
  
    if (errorMessage) {
      alert(errorMessage);
      return false;
    }
  
    alert('Thank you for your message! We will get back to you soon.');
    return true;
  };
  