const animationBox = document.getElementById("boxwebanimation");
const play = document.getElementsByClassName("animationPlay")[0];
const pause = document.getElementsByClassName("animationPause")[0];
const cancel = document.getElementsByClassName("animationCancel")[0];
const reverse = document.getElementsByClassName("animationReverse")[0];

const animationArray = [
    { transform: "translate(0%)", backgroundColor: "#fff" },
    { transform: "translate(100%)", backgroundColor: "#e74c3c" }
];

const animatingbox = animationBox.animate(animationArray, {
    duration: 2000,
    direction: "alternate",
    delay: 0,
    iterations: 3,
    fill: "forwards",
    easing: "linear",
    iterationStart:0,
});
animatingbox.pause();
play.addEventListener("click", function () {
    animatingbox.play();
});
pause.addEventListener("click", function () {
    animatingbox.pause();
});
cancel.addEventListener("click", function () {
    animatingbox.cancel();
});
reverse.addEventListener("click", function () {
    animatingbox.reverse();
});
animatingbox.addEventListener("finish", function () {
    alert("animation completed")
})
const animtionHTML = document.getAnimations();
console.log(animtionHTML, "animation html");
animtionHTML.forEach((animation) => {
    animation.playbackRate = 2;
})