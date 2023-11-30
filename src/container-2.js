// homePage.js
export function createContainer2() {
  const container = document.createElement('div');
  container.setAttribute("id", "container");
  container.innerHTML = `
    <p>첫 번째 페이지의 내용이 여기에 들어갑니다.</p>
    <input type="button" name="valueBtn">다음 페이지로 이동
  `;
  return container;
};
