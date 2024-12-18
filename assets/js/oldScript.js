//script
gsap.defaults({
  ease: "none",
});

let introHeadline = new SplitType(".sc-intro .group-title .headline .name", {type: "char",lineClass: "",wordClass: "",});
let introHeadline2 = new SplitType(".sc-intro .group-title .headline .title", {type: "char",lineClass: "",wordClass: "",});
let projectHeadline = new SplitType(".sc-project .group-title .headline", {type: "char",lineClass: "",wordClass: "",});
let footerName = new SplitType("#footer h3", {type: "char",lineClass: "",wordClass: "",});

let mm = gsap.matchMedia();
mm.add(`(min-width: 700px)`, () => {});

// 인트로
const intro = gsap.timeline();
const headlineChar = document.querySelectorAll(".sc-intro .headline .char");

// 초기 상태 설정
headlineChar.forEach(function (el) {
  gsap.set(el, {
    x: "+=" + getRandom(-500, 500),
    y: "+=" + getRandom(-500, 500),
    rotation: "+=" + getRandom(-720, 720),
    scale: 0,
    opacity: 0,
  });
});

// 애니메이션 효과
intro.to(headlineChar, {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  rotation: 0,
  ease: "power4.inOut",
  stagger: 0.1,
  duration: 0.75,
});

// 랜덤 값 생성 함수
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

gsap.to(".circle-mobile, .circle", {
  scale: 0.5,
  duration: 1,
  ease: "power1.inOut",
  repeat: -1, // 무한 반복
  yoyo: true, // 애니메이션을 역방향으로
});

gsap.set('.sc-project .group-title .headline .char',{yPercent:100})
ScrollTrigger.create({
  trigger: ".sc-project",
  start: "top center",
  end: "bottom center",
  onEnter: () => {
    gsap.to(".sc-project .group-title .headline .char", {yPercent: 0,stagger: 0.1,});},
  onLeaveBack: () => {
    gsap.to(".sc-project .group-title .headline .char", { yPercent: 100 });
  },
});





gsap.set('.sc-project .group-project .project-item', { clipPath: "inset(100% 0% 0% 0%)" });
gsap.set('.sc-project .group-project .project-item .thumb', { clipPath: "inset(100% 25% 0%)" });

const project = gsap.timeline({
	scrollTrigger: {
			trigger: ".sc-project .group-project",
			start: "top 20%",
			end: "bottom bottom",
			scrub: 0,
			markers: false,
	}
});

const projectItems = gsap.utils.toArray('.sc-project .group-project .project-item');
projectItems.forEach((item) => {
    project
    .to(item, { clipPath: "inset(0% 0% 0% 0%)",delay: 0.2})
    .to(item.querySelector('.thumb'), { clipPath: "inset(0% 0% 0%)" }, "<");
});


const projectSide = gsap.timeline({
	scrollTrigger: {
			trigger: ".sc-project .group-side",
			start: "top center",
			end: "bottom bottom",
			scrub: 1,
			markers: false,
	}
});
gsap.utils
  .toArray(".sc-project .group-side .side-item")
  .forEach((item) => {
    projectSide.fromTo(
      item.querySelector('.thumb'),
      {
        clipPath: "inset(0% 100% 0% 0% round 1rem)",
      },
      {
        clipPath: "inset(0% 0% 0% 0% round 1rem)",
      }
    );
  });



gsap.set("#footer h3 .char", { yPercent: 100 });
ScrollTrigger.create({
  trigger: "#footer",
  start: "top center",
  end: "bottom bottom",
  onEnter: () => {
    gsap.to("#footer h3 .char", {
      yPercent: 0,
      stagger: 0.1,
    });
  },
  onLeaveBack: () => {
    gsap.to("#footer h3 .char", { yPercent: 100 });
  },
});
