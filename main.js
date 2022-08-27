let words = [
  {
    en: "apple",
    per: "سیب",
    sample: "This is an apple",
  },
  {
    en: "orange",
    per: "پرتقال",
    sample: "This is an orange",
  },
  {
    en: "hello",
    per: "سلام",
    sample: "hello I'm hesam",
  },
  {
    en: "pen",
    per: "خودکار",
    sample: "you can write whit it",
  },
];

function search() {
  let word = document.querySelector("#inputWord").value;
  document.querySelector(".searchInput").innerText = word;
  for (let i = 0; i < words.length; i++)
    if (word == words[i].en) {
      document.querySelector(".answer").innerText = words[i].per;
      document.querySelector(".sample").innerText = words[i].sample;
    }
}
