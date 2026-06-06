const infoButton = document.getElementById('infoButton');
const funFact = document.getElementById('funFact');

infoButton.addEventListener('click', () => {
  funFact.textContent = 'The Buick Encore is a compact crossover SUV that blends style and practicality for city driving.';
  funFact.classList.remove('hidden');
  infoButton.textContent = 'Show another fact';
});
