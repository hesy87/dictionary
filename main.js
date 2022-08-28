
let thisWordIsCorrect = null; 
fetch('./words.json')
  .then(response => {
    return response.json();
  })
  .then(jsondata => {
    this.thisWordIsCorrect = jsondata.words
  });
function search() {
  let word = document.querySelector("#inputWord").value;
  document.querySelector(".searchInput").innerText = word;
  let answer = this.thisWordIsCorrect.filter(function (e) {
    return e.en == word;
  });
  document.querySelector(".answer").innerText = answer[0].per;
  document.querySelector(".sample").innerText = answer[0].sample;
}