const slider = document.querySelector('body');
const cards = document.querySelector('.slider');
const backIcon = document.querySelector('.back');
const upArrow = document.querySelector('.arrow');
const btns = document.querySelectorAll('.btn');
const innerSld = document.querySelector('.innerSlider');

let isPressed = false;
let cursorY;

//드래그 & 슬라이드 구현 
slider.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isPressed = true;
    cursorY = e.clientY- cards.offsetTop;
    slider.style.cursor = "grabbing";
  });
  slider.addEventListener("touchstart", (e) => {
    // e.preventDefault();
    isPressed = true;
    console.log(e.touches)
    cursorY = e.touches[0].clientY- cards.offsetTop;
    slider.style.cursor = "grabbing";
  },{passive:false});
  
  window.addEventListener("mouseup", (e) => {
    isPressed = false;
  });
  window.addEventListener("touchend", (e) => {
    isPressed = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isPressed) return;
    e.preventDefault();
    e.stopPropagation();
    cards.style.top = `${e.clientY - cursorY}px`;
    boundSlides()
  });
  slider.addEventListener("touchmove", (e) => {
    if (!isPressed) return;
    e.preventDefault();
    e.stopPropagation();
    cards.style.top = `${e.touches[0].clientY - cursorY}px`;
    boundSlides()
  },{passive:false});
  

  function boundSlides() {
    //슬라이더 맨 위, 맨 아래에서 걸리게 하기.
    if (parseInt(cards.style.top) > 1100) {
      cards.style.top = `1100px`;
    } else if (parseInt(cards.style.top) < 400) {
      cards.style.top = `400px`;
    }
  }
  //뒤로가기 버튼 클릭
  backIcon.addEventListener('click', (e) => location.href='./generalInfo.html');
  //화살표 클릭시 위로 슬라이드
  upArrow.addEventListener('click', (e) => {
    myMove();
  })

  //이미지 클릭 시 슬라이드 이동 함수
var id = null;
function myMove(e) {
  const cardsRect = cards.getBoundingClientRect();
  var pos = cardsRect.top;
  console.log(cardsRect)
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame(e) {
    if (pos < 400) {
      clearInterval(id);} 
      else {
      pos -= 5;
      cards.style.top = pos + 'px'; 
    }
  }
}
btns.forEach((e) => {
  e.addEventListener('click', (e)=>{
    let DeptName = e.target.innerHTML;
    console.log(DeptName)
    window.location.href=`./descs/descsIndex.html?${DeptName}`
    console.log(e)
  })
  console.log(e.innerHTML)
})

