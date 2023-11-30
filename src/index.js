import { createContainer2 } from "./container-2.js";
import { createHambuger2 } from "./hambuger-2.js";

const root = document.getElementById('root');

// 렌더링 함수
function render(component, container) {
  container.innerHTML = ''; // 컨테이너 비우기
  container.appendChild(component()); // 컴포넌트 렌더링
}

// 렌더링 실행
render(createHambuger2, root);
render(createContainer2, root);