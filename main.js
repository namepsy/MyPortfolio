const hamburger = document.getElementById('hamburger');
// html에서 요소 가져오기
// <button class="hamburger" id="hamburger">
// <i class="fas fa-bars"></i>
const navUl = document.getElementById('nav-Ul');
// 메뉴 리스트 가져오기 변수 = navUI
hamburger.addEventListener('click' , () => {
  // 리스너 추가 (사용자가 버튼을 클릭하면 그 안의 기능을 실행하는 느낌)
  // navUl.classList.toggle('show');
  // navUI에 show css태그 이름 추가하거나 제거
  // show class가 없으면 추가, 있으면 제거 = 메뉴가 열리고 닫히는 효과
});

