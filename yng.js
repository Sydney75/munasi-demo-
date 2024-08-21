document.querySelectorAll('.select-package').forEach(button => {
    button.addEventListener('click', () => {
      const package = button.parentElement.getAttribute('data-package');
      const price = button.parentElement.getAttribute('data-price');
      document.getElementById('selected-package').value = `${package} - ${price}`;
      document.getElementById('contact-form').style.display = 'block';
    });
  });
  