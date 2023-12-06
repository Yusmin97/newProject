// 태그를 생성하는 함수를 제작
function component(elementNode, attributes, children) {
  let elementStr = `<${elementNode}`;
  for (let key in attributes) {
    elementStr += `${key}="${attributes[key]}"`;
  }
  elementStr += '>';
  if (children) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        elementStr += child;
      } else {
        elementStr += component(child.elementNode, child.attributes, child.children);
      }
    });
  }
  elementStr += `</${elementNode}>`;
  return elementStr;
}

window.addEventListener('hashchange', () => {
  const contentDiv = document.getElementById('main');
  
  const hash = window.location.hash.substr(1);
// hash를 통해 싱글페이지(SPA)에서 페이지 스위칭
  switch (hash) {
    case 'page1':
      contentDiv.innerHTML = component('h1 ', { style: 'color:blue;' }, ['This is Page 1']);
      break;
    case 'page2':
      contentDiv.innerHTML = component('div ', { style: 'background-color:cadetblue;' }, [
        component('h1', {}, ['This is Page 2']),
      ]);
      break;
    default: 
    // main div에 component를 이용하여 3개의 div태그를 삽입 여러개의 태그를 삽입 시 + 사용
      contentDiv.innerHTML = component('div ', { id: 'hambuger' }, [component('button ', { class: 'hambuger-menu'}, ['☰'])])
      + component('div ', { id: 'container' }, [component('div ', { id: 'petCheck'}, [''])])
      + component('div ', { id: 'footer'}, [component('input ', { id:'plusBtn', type: 'button', value: '+'})]);

  }
});

// 초기 로딩을 위한 코드
window.dispatchEvent(new Event('hashchange'));
