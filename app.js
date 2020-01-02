document
  .querySelector("#choice_1")
  .addEventListener("click", function() {
    document.getElementById("choice_1").style.color = "purple";
    document.getElementById("choice_1").style.background = "magenta";
  });

document
  .querySelector("#choice_2")
  .addEventListener("click", function() {
    document.getElementById("choice_2").style.color = "purple";
  });

document
  .querySelector("#choice_3")
  .addEventListener("click", function() {
    document.getElementById("choice_3").style.color = "purple";
    document.querySelector("#choice_3").style.background = "#ff6666";
  });

document
  .querySelector("#choice_4")
  .addEventListener("click", function() {
    document.getElementById("choice_4").style.color = "purple";
    document.querySelector("#choice_4").style.background = "#ff6666";
  });

let choices = document.getElementsByClassName("choice_text");

console.log(choices[0].textContent);
