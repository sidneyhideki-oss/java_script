const inputNome = document.getElementById("#nome");
const inputIdade = document.getElementById("#idade");
const formulario = document.getElementById("#formulario");
const resultado = document.getElementById("#resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const nome = inputNome.value;
  const idade = inputIdade.value;

  resultado.classList.remove(
    "d-none",
    "alert-success",
    "alert-danger",
    "alert-warning",
  );

  if (idade >= 18) {
    resultado.textContent = "Olá, " + nome + "! Você é maior de idade.";
    resultado.classList.add("alert-success");
  } else {
    resultado.textContent = `Olá, ${nome}! Você é menor de idade.`;
    resultado.classList.add("alert-danger");
  }
});
