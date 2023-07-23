const Circles = document.querySelectorAll(".Circle");

for (let Circle of Circles) {
  Circle.addEventListener("click", (e) => {
    if (Circle.id == e.target.id) {
      Circle.firstElementChild.style.display = "initial";
    }
    for (let circle1 of Circles) {
      if (circle1.id != e.target.id) {
        circle1.firstElementChild.style.display = "none";
      }
    }
  });
}

const NoteColors = [
  {
    id: 1,
    botderColor: "rgba(240, 98, 146)",
    h4Color: "rgba(240, 98, 146, 0.4)",
  },
  {
    id: 2,
    botderColor: "rgba(186, 104, 200)",
    h4Color: "rgba(186, 104, 200, 0.4)",
  },
  { id: 3, botderColor: "rgba(79,195,247)", h4Color: "rgba(79,195,247, 0.4)" },
  {
    id: 4,
    botderColor: "rgba(255, 213, 79)",
    h4Color: "rgba(255, 213, 79, 0.4)",
  },
  {
    id: 5,
    botderColor: "rgba(174, 213, 129)",
    h4Color: "rgba(174, 213, 129, 0.4)",
  },
];
