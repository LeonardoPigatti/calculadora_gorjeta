// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputValor = e.target.querySelector('#valor');
  const inputTaxa = e.target.querySelector('#taxa');
  const inputClientes = e.target.querySelector('#cliente');


  const valor = Number(inputValor.value);
  const taxa = Number(inputTaxa.value);
  const cliente = Number(inputClientes.value);

// Verificar seu os valores inseridos são validos
  if (!valor) {
    setResultado('Valor inválido', false);
    return;
  }

  if (!cliente) {
    setResultado('Numero de clinetes invalido', false);
    return;
  }
//--------------------------
  const valorfinal = getvalorfinal(valor,cliente,taxa);

  const msg = `O valor para cada cliente será : ${valorfinal} .`;

  setResultado(msg, true);
});



function getvalorfinal (valor, cliente, taxa) {
  const valorfinal = ((valor*taxa) +valor)/cliente;
  return valorfinal.toFixed(2);
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}