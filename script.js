document.getElementById('open-card').addEventListener('click', function() {
    document.querySelector('.card').classList.add('open');
  });
  
  document.getElementById('close-card').addEventListener('click', function() {
    document.querySelector('.card').classList.remove('open');
  });
  