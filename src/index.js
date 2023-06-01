import { postGame, getGame } from './operation.js';
import './styles.css';

const scoresEl = document.querySelector('.result-list');
const nameEl = document.querySelector('.name');
const scoreEl = document.querySelector('.score');
const submitEl = document.querySelector('.submit');
const refreshEl = document.querySelector('.refresh');

const addScore = async (event) => {
  event.preventDefault();
  await postGame({ user: nameEl.value, score: +scoreEl.value });
  nameEl.value = '';
  scoreEl.value = '';
};

const renderScores = async () => {
  const scores = await getGame();
  scoresEl.innerHTML = '';
  scores.forEach(({ user, score }) => {
    scoresEl.innerHTML += `<li class="score__list">${user} : ${score}</li>`;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  renderScores();
});

submitEl.addEventListener('click', addScore);
refreshEl.addEventListener('click', renderScores);
