const Circles = document.querySelectorAll(".Circle");
let CardArr = document.getElementsByClassName("Card");
let Search = document.getElementById("Search");

for (let Circle of Circles) {
  Circle.addEventListener("click", (e) => {
    if (Circle.firstElementChild.style.display == "inline") {
      return;
    }
    e.target.firstElementChild.style.display = "inline";
    for (let circle1 of Circles) {
      if (circle1 != e.target) {
        circle1.firstElementChild.style.display = "none";
      }
    }
  });
}

const NoteColors = [
  {
    id: 1,
    borderColor: "rgba(240, 98, 146)",
    h4Color: "rgba(240, 98, 146, 0.4)",
  },
  {
    id: 2,
    borderColor: "rgba(186, 104, 200)",
    h4Color: "rgba(186, 104, 200, 0.4)",
  },
  { id: 3, borderColor: "rgba(79,195,247)", h4Color: "rgba(79,195,247, 0.4)" },
  {
    id: 4,
    borderColor: "rgba(255, 213, 79)",
    h4Color: "rgba(255, 213, 79, 0.4)",
  },
  {
    id: 5,
    borderColor: "rgba(174, 213, 129)",
    h4Color: "rgba(174, 213, 129, 0.4)",
  },
];

const Save = document.getElementById("Save");
const TitleInput = document.getElementById("TitleInput");
const NoteText = document.getElementById("NoteText");
let Cards = document.getElementById("Cards");

function NoteMaker(id, borderColor, h4Color, h4Text, pText) {
  return `<div style="border: 2px dashed ${borderColor};" CardId=${id} class="Card">
          <h4 style="background-color: ${h4Color};" class="Cardh4">
            ${h4Text} <img class="Trash" src="./Icons/Trash.svg" alt="" />
          </h4>
          <p>
            ${pText}
          </p>
        </div>`;
}

Save.addEventListener("click", (e) => {
  // input checks
  if (!TitleInput.value) {
    alert("Make a Title ");
    return;
  } else if (!NoteText.value) {
    alert("Write a Note");
    return;
  }
  let check = false;

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

  let ColorId;
  let ColorObj;

  for (let Circle of Circles) {
    if (Circle.firstElementChild.style.display === "inline") {
      ColorId = Circle.id;
    }
  }

  ColorObj = NoteColors.find((item) => item.id == ColorId);

  Cards.innerHTML += NoteMaker(
    ColorId,
    ColorObj.borderColor,
    ColorObj.h4Color,
    TitleInput.value,
    NoteText.value
  );
  TitleInput.value = "";
  NoteText.value = "";

  for (let Circle of Circles) {
    Circle.firstElementChild.style.display = "none";
  }
  CardArr = document.getElementsByClassName("Card");
  CardRemover();
});

function CardRemover() {
  for (let Card of CardArr) {
    Card.firstElementChild.firstElementChild.addEventListener("click", (e) => {
      if (!confirm("Are you sure?")) {
        return;
      }
      e.target.parentElement.parentElement.remove();
    });
  }
}

CardRemover();

Search.addEventListener("keyup", (e) => {
  for (let card of CardArr) {
    if (
      card.firstElementChild.textContent
        .toLowerCase()
        .includes(e.target.value.toLowerCase().trim()) ||
      card.lastElementChild.textContent
        .toLowerCase()
        .includes(e.target.value.toLowerCase().trim())
    ) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  }
  e.target.value;
});
