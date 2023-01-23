let countEle = document.getElementById("count-text");
let saveEle = document.getElementById("save-text");
let count = 0;

function increment() {
  count += 1;
  countEle.textContent = count;
}

function save() {
  let countString = count + " - ";
  saveEle.textContent += countString;
  count = 0;
  countEle.textContent = count;
}
