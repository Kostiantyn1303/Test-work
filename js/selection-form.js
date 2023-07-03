const selectSingle = document.querySelector(".__select");
const selectSingle_title = selectSingle.querySelector(".__select__title");
const selectSingle_labels = selectSingle.querySelectorAll(".__select__label");

// Toggle menu
selectSingle_title.addEventListener("click", () => {
  if ("active" === selectSingle.getAttribute("data-state")) {
    selectSingle.setAttribute("data-state", "");
  } else {
    selectSingle.setAttribute("data-state", "active");
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener("click", (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute("data-state-1", "");
  });
}

const selectSingle1 = document.querySelector(".__select-1");
const selectSingle_title1 = selectSingle1.querySelector(".__select__title-1");
const selectSingle_labels1 =
  selectSingle1.querySelectorAll(".__select__label-1");

selectSingle_title1.addEventListener("click", () => {
  if ("active" === selectSingle1.getAttribute("data-state-1")) {
    selectSingle1.setAttribute("data-state-1", "");
  } else {
    selectSingle1.setAttribute("data-state-1", "active");
  }
});

for (let i = 0; i < selectSingle_labels1.length; i++) {
  selectSingle_labels1[i].addEventListener("click", (evt) => {
    selectSingle_title1.textContent = evt.target.textContent;
    selectSingle1.setAttribute("data-state-1", "");
  });
}
