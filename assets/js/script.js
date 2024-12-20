//script
gsap.defaults({
  ease: "none",
});


//딜레이
setTimeout(() => {
  gsap.to("#num", {
    duration: 3, // 애니메이션 지속 시간 (초 단위)
    innerText: 340, // 목표 숫자
    snap: { innerText: 1 }, // 숫자가 정수로 바뀌도록 설정
    onUpdate: function () {
      document.getElementById("num").innerText = Math.floor(
        this.targets()[0].innerText
      );
    },
  });
}, 3000);



const translations = [
  "Hour", "시간", "時間", "小时", "Hora", "Heure", "Stunde", "Час", "ساعة","घंटा", "ชั่วโมง", "Giờ", "Saat", "Ώρα", "Timme", "Uur",  "Tunti","Oră", "Година", "Oras", "Saa"
];

const textContainer = document.getElementById("nuit");
let index = 0;

function showTranslation() {
  index = (index + 1) % translations.length;
  textContainer.textContent = translations[index];

  // 텍스트 초기 위치 설정 및 페이드인
  gsap.fromTo(
    textContainer,
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5 }
  );
}

// 텍스트 전환
setInterval(showTranslation, 500);


// 사이드 프로젝트
const projectSide = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-project .group-side",
    start: "top center",
    end: "bottom bottom",
    scrub: 1,
    markers: false,
  },
});

gsap.utils.toArray(".sc-project .group-side .side-item").forEach((item) => {
  projectSide.fromTo(
    item.querySelector(".thumb"),
    {
      clipPath: "inset(0% 100% 0% 0%)",
    },
    {
      clipPath: "inset(0% 0% 0% 0%)",
    }
  );
});