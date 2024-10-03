const searchInput = document.querySelector('.search');

searchInput.addEventListener('focus', function() {
  this.style.width = '200px';
  this.style.padding = '0 10px';
});

searchInput.addEventListener('blur', function() {
  if (!this.value) {
    this.style.width = '40px';
    this.style.padding = '0';
  }
});