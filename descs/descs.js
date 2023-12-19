

const deptTitle = document.querySelector('title');
const deptName = document.querySelector('.greets span');
const backicon = document.querySelector('.back');
const mainIMG = document.querySelector('.dept_pic img');
console.log(mainIMG)
// let param = '';
// // 페이지 로딩 시 실행되는 함수
// async function handlePageLoad() {
//     const queryString = window.location.search.substring(1);
//     // 또는 const queryString = window.location.search.slice(1);
//     param =queryString;
//     // queryString을 사용하여 필요한 작업 수행
//     console.log(param);
//   }
// handlePageLoad();
const queryString = window.location.search.substring(1);
// 또는 const queryString = window.location.search.slice(1);
let param =queryString;
// queryString을 사용하여 필요한 작업 수행

deptName.innerHTML = `${param}`;
backicon.addEventListener('click', e =>  window.history.back())
//사진 넣는 조건문
param === 'Rheumatology' ?
mainIMG.setAttribute('src', `./descPICS/Orthopedics.webp`) :
mainIMG.setAttribute('src', `./descPICS/${param}.webp`) ;




