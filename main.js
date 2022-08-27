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

import words from "./words.json" ;

window.onload() {
  console.log(words.words);
}


function search() {
  let word = document.querySelector("#inputWord").value;
  document.querySelector(".searchInput").innerText = word;
  // for (let i = 0; i < words.words.length; i++)
  //   if (word == words.words[0].en) {
  //     document.querySelector(".answer").innerText = words.words[1].per;
  //     document.querySelector(".sample").innerText = words.words[2].sample;
  //   }
}
