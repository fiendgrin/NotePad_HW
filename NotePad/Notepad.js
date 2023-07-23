const Circles = document.querySelectorAll(".Circle");

for (let Circle of Circles) {
  Circle.addEventListener("click", (e) => {
    if (Circle.id == e.target.id) {
      Circle.firstElementChild.style.display = "inline";
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

const Save = document.getElementById("Save");
const TitleInput = document.getElementById("TitleInput");
const NoteText = document.getElementById("NoteText");





Save.addEventListener("click", (e) => {
  // input checks
  if (!TitleInput.value) {
    alert("Make a Title ");
    return;
  } else if (!NoteText.value) {
    alert("Write a Note");
    return;
  }
  for (let Circle of Circles) {
    if (Circle.firstElementChild.style.display === "inline") {
      check = true;
      break;
    }
  }
  if (check == false) {
    alert("Pick a Color");
    return;
  }
  // Note Creation
});
