const elements = document.querySelectorAll(".load-elements span");
const loader = document.querySelector(".load-screen");
const final = document.querySelector(".final");
const play = document.querySelector("#play");

const count = 200,
  defaults = {
    origin: { y: 0.7 }
  };

playAnimation();

play.addEventListener("click", () => {
  loader.classList.remove("hide");
  final.classList.remove("show");

  elements.forEach((element) => (element.classList.value = ""));
  elements[0].classList.add("enter");
  playAnimation();
});

function playAnimation() {
  const secondToLast = elements.length - 1;
  elements.forEach((element, idx) => {
    element.addEventListener("animationend", (e) => {
      if (e.animationName === "enter" && idx !== secondToLast) {
        element.classList.remove("enter");
        element.classList.add("exit");
      } else if (e.animationName === "hide" && element.nextElementSibling) {
        element.nextElementSibling.classList.add("enter");
      } else {
        loader.classList.add("hide");
        final.classList.add("show");
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    });
  });
}
