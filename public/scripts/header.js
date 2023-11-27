export const createHeader = () => {
  const header = document.createElement('header');
  header.innerHTML = `
    <div class="hamburger-menu">☰</div>
  `;
  return header;
};