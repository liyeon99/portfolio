// 한국 시간대 (UTC+9)로 현재 시간 표시
function updateTime() {
  const now = new Date();
  const koreaTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Seoul" })
  );
  const timeElement = document.querySelector("time");
  timeElement.textContent = `KOR ${koreaTime.toLocaleString("ko-KR", {
    hour12: false, // 24시간 형식으로 설정
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })}`;
  timeElement.setAttribute("datetime", koreaTime.toISOString());
}



// 시간 업데이트
updateTime();
setInterval(updateTime, 1000); // 1초마다 시간 업데이트


const date = new Date();
let _year = date.getFullYear();
const thisYear = document.querySelector("#footer .date");
thisYear.innerText  = _year;
console.log(date.getFullYear())

// 커서
let mouseCursor = document.querySelector(".cursor");
let links = document.querySelectorAll("a, button");

// 목표
let targetX = 0,
  targetY = 0;
// 현재
let currentX = 0,
  currentY = 0;
const followSpeed = 0.1; // 커서 속도

// 커서의 left값과 top값을 커서의 XY 좌표값과 일치시킴
function cursor(e) {
  targetX = e.clientX;
  targetY = e.clientY;
}

// 마우스 이동 시 cursor 함수 호출
window.addEventListener("mousemove", cursor);

// 커서에 애니메이션 적용
// https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame
function animateCursor() {
  currentX += (targetX - currentX) * followSpeed;
  currentY += (targetY - currentY) * followSpeed;

  // 스크롤 위치를 포함하여 커서 위치를 설정
  mouseCursor.style.left = currentX + "px";
  mouseCursor.style.top = currentY + "px";

  // 반복
  requestAnimationFrame(animateCursor);
}
animateCursor();

// 링크 및 버튼 호버 효과
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    mouseCursor.classList.add("cursor-hover");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursor-hover");
  });
});


// 인트로 와플 커서
let mouseCircle = document.querySelector(".circle");
const groupTitle = document.querySelector(".sc-intro .group-title");

groupTitle.addEventListener("mousemove", (e) => {
  const groupTitleRect = groupTitle.getBoundingClientRect(); // group-title 영역의 크기와 위치
  const x = e.clientX - groupTitleRect.left; // group-title 내에서의 x 좌표
  const y = e.clientY - groupTitleRect.top; // group-title 내에서의 y 좌표

  mouseCircle.style.left = `${x - mouseCircle.offsetWidth / 2}px`; // 마우스 커서를 중심으로 맞추기
  mouseCircle.style.top = `${y - mouseCircle.offsetHeight / 2}px`; // 마우스 커서를 중심으로 맞추기
  mouseCircle.classList.add("opacity");
});

groupTitle.addEventListener("mouseleave", () => {
  mouseCircle.classList.remove("opacity");
});



//메뉴
document.querySelectorAll(".nav .nav-item").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelectorAll(".nav .nav-item").forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});

let navItems = gsap.utils.toArray(".nav-item a");

navItems.forEach((link) => {
  let element = document.querySelector(link.getAttribute("href"));
  ScrollTrigger.create({
    trigger: element,
    start: "top center",
    end: "bottom center",
    onToggle: () => setActive(link),
  });
});

function setActive(link) {
  navItems.forEach((el) => el.parentElement.classList.remove("active")); 
  link.parentElement.classList.add("active");
}

