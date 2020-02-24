// const body = document.getElementsByTagName("body")[0];
// const elem = document.documentElement;

// function follow(cursor) {
//   let windowWidth = window.innerWidth || elem.clientWidth || body.clientWidth,
//     windowHeight = window.innerHeight || elem.clientHeight || body.clientHeight;

//   let x = Math.cos((Math.PI * cursor.pageY) / windowHeight) * 0.35;
//   let y = Math.cos((Math.PI * cursor.pageX) / windowWidth) * 0.35;

//   illo.rotate.x = x;
//   illo.rotate.y = y;
//   illo.updateRenderGraph();
// }

// addEventListener("mousemove", follow, false);
// addEventListener("touchstart", follow, false);
// addEventListener("touchmove", follow, false);

// illo.updateRenderGraph();

// let $dog = document.querySelector(".zdog-canvas");
// let $circles = document.querySelectorAll(".js-circle");
// let $texts = document.querySelector(".js-texts");

// const updateCirclePosition = () => {
//   let top = $texts.getBoundingClientRect().top;
//   let documentHeight = document.body.getBoundingClientRect().height;
//   let circleHeight = $circles[0].getBoundingClientRect().height;
//   let height = documentHeight / 2 - circleHeight / 2;
//   let y = height - top;

//   $circles[0].style.marginTop = `${y}px`;
//   $circles[1].style.marginTop = `${y}px`;
// };

// addEventListener("scroll", e => {
//   updateCirclePosition();
// });

// window.onload = () => {
//   var options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: [0.2]
//   };

//   let observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       let r = Math.floor(entry.intersectionRatio * 100);
//     });
//   }, options);

//   observer.observe(document.querySelector(".js-text"));

//   updateCirclePosition();
// };