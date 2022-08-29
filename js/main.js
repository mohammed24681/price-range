const minValField = document.getElementById("min");
const maxValField = document.getElementById("max");

const minSlider = document.getElementById("min-slider");
const maxSlider = document.getElementById("max-slider");

const progress = document.getElementById("progress");
const priceGap = 1000;

minSlider.addEventListener("input", () => {
  if (maxSlider.value - minSlider.value <= priceGap) {
    minSlider.value = +maxSlider.value - priceGap;
  }
  minValField.value = minSlider.value;
  slidersCheck()
});

maxSlider.addEventListener("input", () => {
  if (maxSlider.value - minSlider.value <= priceGap) {
    maxSlider.value = +minSlider.value + priceGap;
  }
  maxValField.value = maxSlider.value;
  slidersCheck()
});

minValField.addEventListener("blur", () => {
  if (
    minValField.value <= +minValField.getAttribute("min") ||
    minValField.value >= +maxValField.getAttribute("max") ||
    maxValField.value - minValField.value <= priceGap
  ) {
    minValField.value = +maxValField.value - priceGap;
  }
  minSlider.value = minValField.value;
  slidersCheck();
});

maxValField.addEventListener("blur", () => {
  if (
    maxValField.value <= +minValField.getAttribute("min") ||
    maxValField.value >= +maxValField.getAttribute("max") ||
    maxValField.value - minValField.value <= priceGap
  ) {
    maxValField.value = +minValField.value + priceGap;
  }
  maxSlider.value = maxValField.value;
  slidersCheck();
});

function slidersCheck() {
  progress.style.right = `${
    100 - (maxValField.value / maxValField.getAttribute("max")) * 100
  }%`;
  progress.style.width = `${
    ((maxValField.value - minValField.value) /
      maxValField.getAttribute("max")) *
    100
  }%`;
  progress.style.left = `${
    (minValField.value / minValField.getAttribute("max")) * 100
  }%`;
}