export const createHambuger = () => {
  const header = document.createElement('div');
  header.setAttribute("id", "hambuger");
  header.innerHTML = `
    <button class="hamburger-menu">☰</button>
  `;
  return header;
};