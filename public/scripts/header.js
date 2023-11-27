export const createHeader = () => {
  const header = document.createElement('header');
  header.innerHTML = `
    <button class="hamburger-menu">☰</button>
  `;
  return header;
};