const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");

let filterInput;

checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput) {
        infoTxt.style.color = "#ff5e57";
        return infoTxt.innerHTML = `Não, <span>'${txtInput.value}'</span> Não é um palindromo!`;
    }
    infoTxt.style.color = "#0be881";
    infoTxt.innerHTML = `SIM, <span>'${txtInput.value}'</span> É um palindromo!`;
});

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});