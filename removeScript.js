// targets the parent element of the search results
const resultsList = document.querySelector(
  "#responsiveSearchResults__component > div > div.SearchResults__filterPanelAndResults.content-width > div.SearchResults__noFade.resultsWrapper > div:nth-child(2)"
);

// removes the discount text
function removeDiscountText() {
  // targets all discount texts
  const discountTextList = document.querySelectorAll(
    ".ResultListItemV2__discountWrapper"
  );

  // targets all seperators
  const seperatorList = document.querySelectorAll(
    ".ResultListItemV2__seperator"
  );

  discountTextList.forEach((text) => {
    if (text.innerText !== "") {
      const price = text.innerText.match(/(\d+)/)[0]; // finds the number in the text
      const discountText = text.lastChild.firstChild; // targets the text for each ocassion
      if (price < 200 && discountText !== null) {
        discountText.remove(); // removes the text
        if (seperatorList.length !== 0) {
          seperatorList.forEach((seperator) => {
            seperator.remove(); // removes the seperator
          });
        }
      }
    }
  });
}

// creates and returns a new observer which will invoke a specified callback function and runs the removeDiscountText() function when DOM changes occur
const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    removeDiscountText();
  });
});

// configures the observer to begin receiving notifications through its callback function when DOM changes on the children of search results matching the given options occur
observer.observe(resultsList, { childList: true });
