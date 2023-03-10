import './style.css';
import Scores from './modules/object.js';
import { post, get } from './modules/API.js';

/* eslint-disable-next-line no-undef */
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
const scores = document.getElementById('scores');
const refresh = document.getElementById('refresh');
const data = new Scores();

// -------------------- Functions -----------------

const UpdateScoresHTML = () => {
  scores.innerHTML = '';
  data.array.forEach((element) => {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    h4.innerHTML = ` ${element.user} - ${element.score} `;
    li.appendChild(h4);
    scores.appendChild(li);
  });
};

const formFunction = () => {
  data.add({ user: name.value, score: score.value });
  post({ user: name.value, score: score.value }).then(() => {
    UpdateScoresHTML();
  });
  name.value = '';
  score.value = '';
  toast.fire({
    title: 'Score added',
  });
};

// -------------------- Event listeners -----------------

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formFunction();
});

refresh.addEventListener('click', () => {
  get().then((res) => {
    data.array = res.result;
    UpdateScoresHTML();
  });
  toast.fire({
    title: 'Refreshed',
  });
});

window.addEventListener('DOMContentLoaded', () => {
  get().then((res) => {
    data.array = res.result;
    UpdateScoresHTML();
  });
});
