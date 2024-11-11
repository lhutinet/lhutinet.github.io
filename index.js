// const --- = document.querySelector("---");
// const --- = document.getElementById("---");
// window.addEventListener("---", () => {----});

// test
// window.addEventListener("click", (e) => {
//   console.log(e);
// });
// partie a supprimée

let result = document.querySelector(".resultat").textContent;
let preResult = "";
const btn = document.querySelectorAll("button");
const enter = document.getElementById("enter");


btn.forEach((button) => {
  button.addEventListener("click", (event) => {
    let resultFinal = "";
    const texteBoutonClique = event.target.textContent;

    if (texteBoutonClique === "enter") {
      event.preventDefault();
      resultFinal = eval(preResult);
      document.querySelector(".resultat").textContent = resultFinal;
    } else if (texteBoutonClique === "del") {
      
    } else {
      preResult += texteBoutonClique;
      document.querySelector(".resultat").textContent = preResult;
    }
  });
});
