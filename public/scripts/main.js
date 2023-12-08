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
  const contentDiv = document.getElementById('root');

  const hash = window.location.hash.substr(1);
  // hash를 통해 싱글페이지(SPA)에서 페이지 스위칭
  switch (hash) {
    case 'petInfo':
      // 펫 정보를 입력하는 페이지
      contentDiv.innerHTML =
        component('div ', { id: 'hamburger' }, [component('button ', { class: 'hamburger-menu' }, ['☰'])]) +
        component('div ', { id: 'container' }, [
          component('div ', { id: 'petCheck' }, [
            component('form ', { action: '/info', id: 'petForm', method: 'post' }, [
              component('div ', { class: 'upload-icon' }, [
                component('label ', { for: 'fileUpload', class: 'custom-file-upload' }, [
                  component(
                    'img ',
                    {
                      id: 'preview',
                      src: '#',
                      alt: 'preview',
                      style: 'display:none; width: 100%; height: 100%; border-radius: 50%;',
                    },
                    []
                  ) + component('span ', { id: 'plus' }, ['+']),
                ]) +
                  component('input ', {
                    id: 'fileUpload',
                    name: 'file-upload',
                    type: 'file',
                    accept: 'image/*',
                    onchange: 'previewImage(this)',
                  }),
              ]) +
                component('div ', { class: 'input-group' }, [
                  component(
                    'input ',
                    { type: 'text', name: 'petName', id: 'petName', class: 'inp', placeholder: '반려동물 이름' },
                    []
                  ),
                ]) +
                component('div ', { class: 'input-group' }, [
                  component(
                    'input ',
                    { type: 'text', name: 'weight', id: 'weight', class: 'inp', placeholder: '몸무게' },
                    []
                  ),
                ]) +
                component('div ', { class: 'input-groups' }, [
                  component('label ', { for: 'sex', class: 'petLabels' }, ['성별']) +
                    component('select ', { name: 'sex', id: 'sex' }, [
                      component('option', {}, ['남']) + component('option', {}, ['여']),
                    ]),
                ]) +
                component('div ', { class: 'input-group' }, [
                  component(
                    'input ',
                    { type: 'text', name: 'species', id: 'species', class: 'inp', placeholder: '반려동물 종' },
                    []
                  ),
                ]) +
                component('div ', { class: 'input-group' }, [
                  component('label ', { for: 'birth', class: 'petLabels' }, ['생일']) +
                    component(
                      'input ',
                      {
                        type: 'date',
                        name: 'birth',
                        placeholder: '생일',
                        value: '생일',
                        id: 'birth',
                        class: 'birthInp',
                      },
                      []
                    ),
                ]) +
                component('div ', { class: 'input-groups' }, [
                  component('label ', { for: 'neutering', class: 'petLabels' }, ['중성화 유무']) +
                    component('select ', { name: 'neutering', id: 'neutering' }, [
                      component('option ', {}, ['o']) + component('option ', {}, ['x']),
                    ]),
                ]) +
                component('div ', { class: 'input-groups' }, [
                  component('label ', { for: 'bloodType', class: 'petLabels' }, ['혈액형']) +
                    component('select ', { name: 'bloodType', id: 'bloodType' }, [
                      component('option ', {}, ['A']) +
                        component('option ', {}, ['B']) +
                        component('option ', {}, ['AB']),
                    ]),
                ]),
            ]),
          ]),
        ]) +
        component('div ', { id: 'footer' }, [component('input ', { id: 'saveBtn', type: 'submit', value: '저 장' })]);

      // 저장 버튼 클릭 시 데이터를 서버로 전송
      const saveBtn = document.getElementById('saveBtn');
      saveBtn.addEventListener('click', () => {
        // FormData 객체를 생성하여 form 데이터 수집
        const formData = new FormData(document.getElementById('petForm'));

        // const petData = {
        //   fileUpload: document.getElementById('fileUpload').value,
        //   petname: document.getElementById('petName').value,
        //   weight: document.getElementById('weight').value,
        //   sex: document.getElementById('sex').value,
        //   species: document.getElementById('species').value,
        //   birth: document.getElementById('birth').value,
        //   neutering: document.getElementById('neutering').value,
        //   bloodType: document.getElementById('bloodType').value,
        // };

        // FormData를 JSON 객체로 변환
        const petData = {};
        formData.forEach((value, key) => {
          petData[key] = value;
        });

        fetch('/info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(petData),
        })
          .then((response) => response.text())
          .then((data) => console.log(data))
          .catch((error) => console.error('Error saving data:', error));
      });
      break;
    case 'page2':
      contentDiv.innerHTML = component('div ', { style: 'background-color:cadetblue;' }, [
        component('h1', {}, ['This is Page 2']),
      ]);
      break;
    default:
      // main div에 component를 이용하여 3개의 div태그를 삽입 여러개의 태그를 삽입 시 + 사용
      contentDiv.innerHTML =
        component('div ', { id: 'hamburger' }, [component('button ', { class: 'hamburger-menu' }, ['☰'])]) +
        component('div ', { id: 'container' }, [component('div ', { id: 'petCheck' }, [''])]) +
        component('div ', { id: 'footer' }, [component('input ', { id: 'plusBtn', type: 'button', value: '+' })]);
  }
});

// 초기 로딩을 위한 코드
window.dispatchEvent(new Event('hashchange'));

// plusBtn 클릭 이벤트 처리 page 이동
const plusBtn = document.getElementById('plusBtn');
plusBtn.addEventListener('click', () => {
  window.location.hash = 'petInfo';
});

function previewImage(input) {
  const preview = document.getElementById('preview');
  const plus = document.getElementById('plus');
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
      plus.style.display = 'none'; // + 숨기기
    };
    reader.readAsDataURL(file);
  }
}
