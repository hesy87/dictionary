
let thisWordIsCorrect = null; 
fetch('./words.json')
  .then(response => {
    return response.json();
  })
  .then(jsondata => {
    let words = jsondata.words
    this.thisWordIsCorrect = jsondata.words
    console.log(words)
  });
function search() {
  console.log(this.thisWordIsCorrect)
}