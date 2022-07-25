// targets the div of 20kg
const divTwentyKg = document.querySelector(
  "#fligtLuggageAncillary__component > div > section > div.View2__summaryComponentContainer > section > div.View2__luggageContiner > div.View2__luggageInnerContainer > div > div > div.View2__luggages > div:nth-child(2)"
);

// creates two new divs, gets the language, declares the new text
const newDiv = document.createElement("div");
const newNestedDiv = document.createElement("div");
const language = dataLayer[0].page.language;
const EN_TEXT = "Recommended";
const NL_TEXT = "Aanbevolen";
const FR_TEXT = "Recommandé";

// Option 1 - adds the new divs to the DOM and styles them, adds the new text
function insertLabelInline() {
  divTwentyKg.insertBefore(newDiv, divTwentyKg.firstChild);
  newDiv.insertBefore(newNestedDiv, newDiv.firstChild);
  // adding inline styling to the elements
  divTwentyKg.style.position = "relative";
  newDiv.style.cssText = `background-color: #fff; left: 50%; padding: 0 4px; position: absolute;
  top: calc(0px - 0.3rem); transform: translateX(-50%); z-index: 1;`;
  newNestedDiv.style.cssText = `background-color: #aad700; color: #092a5e; font-weight: 700;padding: 0 24px; text-transform: uppercase;`;

  if (language === "en") {
    newNestedDiv.innerText = EN_TEXT;
  } else if (language === "nl" || language === "nl_BE") {
    newNestedDiv.innerText = NL_TEXT;
  } else if (language === "fr" || language === "fr_BE") {
    newNestedDiv.innerText = FR_TEXT;
  }
}

insertLabelInline();

// Option 2 - adds the new divs to the DOM and styles them, adds the new text
function insertLabelClass() {
  divTwentyKg.insertBefore(newDiv, divTwentyKg.firstChild);
  newDiv.insertBefore(newNestedDiv, newDiv.firstChild);

  // adding classes to the elements for styling
  divTwentyKg.className += " reccom";
  newDiv.setAttribute("class", "reccom-label");
  newNestedDiv.setAttribute("class", "reccom-label-text");

  if (language === "en") {
    newNestedDiv.innerText = EN_TEXT;
  } else if (language === "nl" || language === "nl_BE") {
    newNestedDiv.innerText = NL_TEXT;
  } else if (language === "fr" || language === "fr_BE") {
    newNestedDiv.innerText = FR_TEXT;
  }
}

insertLabelClass();
