let thisWordIsCorrect = null;
fetch("./index.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    this.thisWordIsCorrect = jsondata.words;
  });

function search() {
  let word = document.querySelector("#inputWord").value;
  document.querySelector(".searchInput").innerText = word;

  console.log(this.thisWordIsCorrect);

  let answer = this.thisWordIsCorrect.filter(function (e) {
    return e == word;
  });
  console.log(answer);
  // document.querySelector(".answer").innerText = answer[0].per;
  // document.querySelector(".sample").innerText = answer[0].sample;
}

// ---------------------------------------------------------------


let acc = true
function openAcc() {
  if (acc) {
    document.querySelector(".searchInput").style.display = "block";
    document.querySelector(".caret").style.transform = "rotate(180deg)";
    acc = false
  }
  else {
    document.querySelector(".searchInput").style.display = "none";
    document.querySelector(".caret").style.transform = "rotate(0)";
    acc = true
  }
}

function openAcc2() {
  if (acc) {
    document.querySelector(".answer").style.display = "block";
    document.querySelector(".caret2").style.transform = "rotate(180deg)";
    acc = false
  }
  else {
    document.querySelector(".answer").style.display = "none";
    document.querySelector(".caret2").style.transform = "rotate(0)";
    acc = true
  }
}

function openAcc3() {
  if (acc) {
    document.querySelector(".sample").style.display = "block";
    document.querySelector(".caret3").style.transform = "rotate(180deg)";
    acc = false
  }
  else {
    document.querySelector(".sample").style.display = "none";
    document.querySelector(".caret3").style.transform = "rotate(0)";
    acc = true
  }
}