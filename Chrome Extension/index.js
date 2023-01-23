const input = document.getElementById("input");
const inputBtn = document.getElementById("inputBtn");
const tapBut = document.getElementById("tapBut");
const deleteBut = document.getElementById("deleteBut");
const combont = document.getElementById("combont");
const localStorages = JSON.parse(localStorage.getItem("myleads"));
let myleads = [];
function rander(lead) {
  let strenge = "";
  for (let i = 0; i < lead.length; i++) {
    strenge += `
    <li>
         <a target='_blank' href='${lead[i]}'>
             ${lead[i]}
        </a>
    </li>
    `;
  }
  combont.innerHTML = strenge;
}
if (localStorages) {
  myleads = localStorages;
  rander(myleads);
}
inputBtn.addEventListener("click", function () {
  myleads.push(input.value);
  localStorage.setItem("myleads", JSON.stringify(myleads));
  input.value = "";
  rander(myleads);
});
tapBut.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myleads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myleads));
    rander(myleads);
  });
});
deleteBut.addEventListener("dblclick", function () {
  localStorage.clear();
  myleads = [];
  rander(myleads);
});
