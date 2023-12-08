// footer.js
export const createfooter = () => {
  const foot = document.createElement('div');
  foot.setAttribute("id", "footer");
  foot.innerHTML = `
  <input type="button" value="+" id="plusBtn">
  `;
  return foot;
};
