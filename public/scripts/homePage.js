// homePage.js
export const createHomePage = () => {
  const homePage = document.createElement('div');
  homePage.innerHTML = `
    <p>첫 번째 페이지의 내용이 여기에 들어갑니다.</p>
    <button onclick="navigateToNextPage()">다음 페이지로 이동</button>
  `;
  return homePage;
};
