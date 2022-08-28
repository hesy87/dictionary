// let words = [
//   {
//     en: "apple",
//     per: "سیب",
//     sample: "This is an apple",
//   },
//   {
//     en: "orange",
//     per: "پرتقال",
//     sample: "This is an orange",
//   },
//   {
//     en: "hello",
//     per: "سلام",
//     sample: "hello I'm hesam",
//   },
//   {
//     en: "pen",
//     per: "خودکار",
//     sample: "you can write whit it",
//   },
// ];

fetch('./words.json')
.then(response => {
   return response.json();
})
.then((jsondata => console.log(jsondata.words[0].en)));

let words = require('./words.json');
console.log(words)

function search(words) {
  let word = document.querySelector("#inputWord").value;
  document.querySelector(".searchInput").innerText = word;
  for (let i = 0; i < words.words.length; i++)
    if (word == words.words[i].en) {
      document.querySelector(".answer").innerText = words.words[i].per;
      document.querySelector(".sample").innerText = words.words[i].sample;
    }
}
