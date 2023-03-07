import './style.css';

/* eslint-disable no-undef */
const toast = Swal.mixin({
  toast: true,
  icon: 'success',
  title: 'General Title',
  position: 'top-right',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

// -------------------- Constants -----------------

const form = document.getElementById('form');
const name = document.getElementById('name');
const score = document.getElementById('score');

// -------------------- Event listeners -----------------

form.addEventListener('submit', (e) => {
  e.preventDefault();
  name.value = '';
  score.value = '';
  toast.fire({
    title: 'Score added',
  });
});
