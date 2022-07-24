// targets the div of 20kg
const divTwentyKg = document.querySelector(
  "#fligtLuggageAncillary__component > div > section > div.View2__summaryComponentContainer > section > div.View2__luggageContiner > div.View2__luggageInnerContainer > div > div > div.View2__luggages > div:nth-child(2)"
);

// creates two new divs, get the language, declares the new text
const newDiv = document.createElement("div");
const newNestedDiv = document.createElement("div");
const language = dataLayer[0].page.language;
const EN_TEXT = "Recommended";
const NL_TEXT = "Aanbevolen";
const FR_TEXT = "Recommandé";

// adds the new divs to the DOM and styles them, adds the new text
function insertLabel() {
  divTwentyKg.insertBefore(newDiv, divTwentyKg.firstChild);
  newDiv.insertBefore(newNestedDiv, newDiv.firstChild);
  divTwentyKg.style.position = "relative";
  newDiv.style.cssText = `background-color: #fff; left: 50%; padding: 0 4px; position: absolute;
  top: calc(0px - 0.3rem); transform: translateX(-50%); z-index: 1;`;
  newNestedDiv.style.cssText = `background-color: #aad700; color: #092a5e; font-weight: 700;padding: 0 24px; text-transform: uppercase;`;

  switch (language) {
    case "en":
      newNestedDiv.innerText = EN_TEXT;
      break;
    case "nl":
      newNestedDiv.innerText = NL_TEXT;
      break;
    case "fr":
      newNestedDiv.innerText = FR_TEXT;
      break;
  }
}

insertLabel();
