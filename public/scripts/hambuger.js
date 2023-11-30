export const createHambuger = () => {
  const hambuger = document.createElement('div');
  hambuger.setAttribute("id", "hambuger");
  hambuger.innerHTML = `
    <button class="hamburger-menu">☰</button>
  `;
  return hambuger;
};