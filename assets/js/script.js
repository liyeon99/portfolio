//script
gsap.defaults({
  ease: "none",
});


  const swiper = new Swiper('.swiper-container', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    slideToClickedSlide: true,
    effect: 'panorama',
    autoplay:true,
  });


const translations = [
  "Hour", "시간", "時間", "小时", "Hora", "Heure", "Stunde", "Час", "ساعة","घंटा", "ชั่วโมง", "Giờ", "Saat", "Ώρα", "Timme", "Uur",  "Tunti","Oră", "Година", "Oras", "Saa"
];

const textContainer = document.getElementById("nuit");
let index = 0;

function showTranslation() {
  // 텍스트 페이드아웃 및 위로 이동
  gsap.to(textContainer, {
    opacity: 0,
    y: -20,
    duration: 0.5,
    onComplete: () => {
      // 다음 텍스트로 변경
      index = (index + 1) % translations.length;
      textContainer.textContent = translations[index];

      // 텍스트 초기 위치 설정 및 페이드인
      gsap.fromTo(
        textContainer,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      );
    },
  });
}

// 매 1초마다 텍스트 전환
setInterval(showTranslation, 1000);

const targetValue = 340; // 목표 값
const duration = 2; // 애니메이션 지속 시간

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