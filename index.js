function AreaTRI() {
  const base = parseFloat(prompt("Insira o valor da base do triangulo"));
  const altura = parseFloat(prompt("Insira o valor da altura do triangulo"));
  return (base * altura) / 2;
}

function AreaRet() {
  const base = parseFloat(prompt("Insira o valor da base do retangulo"));
  const altura = parseFloat(prompt("Insira o valor da altura do retangulo"));
  return base * altura;
}

function AreaQuadr() {
  const lado = parseFloat(prompt("Insira o valor do lado do quadrado"));
  return lado * lado;
}

function AreaTrap() {
  const BaseMA = parseFloat(prompt("Insira o valor da Base Maior do trapézio"));
  const BaseME = parseFloat(prompt("Insira o valor da Base menor trapézio"));
  const altura = parseFloat(prompt("Insira o valor da Altura trapézio"));
  return ((BaseME + BaseMA) * altura) / 2;
}

function AreaCirc() {
  const raio = parseFloat(prompt("Informe o valor do raio do circulo"));
  return raio * raio * 3.14;
}
function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Sair\n"
  );
}
function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;
    switch (opcao) {
      case "1":
        resultado = AreaTRI();
        break;
      case "2":
        resultado = AreaRet();
        break;
      case "3":
        resultado = AreaQuadr();
        break;
      case "4":
        resultado = AreaTrap();
        break;
      case "5":
        resultado = AreaCirc();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção invalida");
        break;
    }
    if (resultado) {
      alert("O resultado é " + resultado);
    }
  } while (opcao !== "6");
}

executar();
