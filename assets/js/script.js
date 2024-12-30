//script
gsap.defaults({
  ease: "none",
});



const loading = document.querySelector(".loading");
  

//딜레이
setTimeout(() => {
  gsap.to("#num", {
    duration: 3, 
    innerText: 340, // 목표 숫자
    snap: { innerText: 1 }, // 숫자가 정수로 바뀌도록 설정
    onUpdate: function () {
      document.getElementById("num").innerText = Math.floor(this.targets()[0].innerText);
    },
  });
  loading.style.display = 'none';
}, 3300);
setTimeout(() => {gsap.to(loading,{ yPercent: -100},);}, 3000);

ScrollTrigger.create({
	trigger: ".sc-project .group-side", 
	start: "top bottom", 
	end: "bottom bottom", 
	markers:false,
	onEnter: function() {
    document.querySelector('#header .group-top').classList.add('dark');
    document.querySelector('.nav-list').classList.add('dark');
	},
	onLeaveBack: function() {
    document.querySelector('#header .group-top').classList.remove('dark');
    document.querySelector('.nav-list').classList.remove('dark');
	}
});

const project = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-project .group-project",
    start: "top top",
    end: "bottom bottom",
    scrub: 0,
    markers: false,
  },
});

gsap.set('.sc-project .group-project .project-item:nth-child(n+2)',{yPercent:100})



project
.to('.sc-project .group-project .project-item:nth-child(n+2)',
  {yPercent:0,
  stagger:{
    amount:0.8,
  },},'-=0.3')
.to('.sc-project .group-project .project-item',{ '--after': '1' },'<+=0.2')

// 사이드 프로젝트
const projectSide = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-project .group-side",
    start: "top bottom",
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

function init() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({
    "(min-width: 700px)": function() {
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
    },
    "(max-width: 767px)": function() {

    }
  });
  window.addEventListener("resize", ScrollTrigger.update);
}

init();