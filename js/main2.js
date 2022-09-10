function showRemove () {
    document.querySelector('.remove').style.display = 'block';
}

function remove() {
    document.querySelector('.input').value = '';
    document.querySelector('.remove').style.display = 'none';
}

let thisWordIsCorrect = null;
fetch("./index.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    this.thisWordIsCorrect = jsondata.words;
  });

function search() {
  let word = document.querySelector("#input").value;
  let answer = this.thisWordIsCorrect.filter(function (e) {
    return e.en == word;
  });

  document.querySelector("#answer").innerText = answer[0].fa[0];
}

function show() {
    document.querySelector('.translate').style.display = 'none';
    document.querySelector('.tarjome').style.display = 'block';
}