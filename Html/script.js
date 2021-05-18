function gritar() {
  alert("AAAAAAAAAAAAAA");
}

function questionario(){
  var pergunta = prompt('Dormiu bem ? Porra !')
  if (pergunta == 'Sim'){
    alert('Que belo dia.')
  } else {
    alert('Que merda heim.')
  }
}

function MudarNome(){
  var h1 = document.getElementsByTagName('H1')

  if (h1[0].innerText == 'Ohayo Diazinho Começando'){
    h1[0].innerText = 'Vontade de comer paçoca.'
  } else {
    h1[0].innerText = 'Ohayo Diazinho Começando'
  }
}

function Incrementar(){
  var soma = document.getElementById("Valor")
  Valor.innerText = parseInt(Valor.innerText) + 1
}
