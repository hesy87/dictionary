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
  let answer = this.thisWordIsCorrect.filter(function (e) {
    return e.en == document.querySelector("#input").value;
  });
    document.querySelector("#answer").innerText = answer[0].fa.join(' / ');
  }


function show() {
    document.querySelector('.translate').style.display = 'none';
    document.querySelector('.tarjome').style.display = 'block';
}

// window.addEventListener("keypress", function(event) {
//   let word = document.querySelector("#input").value;
//   if (event.key === "Enter" && word != null) {
//     search();
//   }
// });