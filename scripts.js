// Cotação de moedas do dia.
const USD = 5.69
const EUR = 6.21
const GBP = 7.37

// Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency =document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Captando o evento de submit (enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault()


  switch (currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol){
  try {
    description.textContent = `${symbol} 1 = ${price}`

    // Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")
  } catch {
    
    // Remove a classe do footer removendo ele da tela
    footer.classList.remove("show-result")
    
    console.error(error)
    alert("Ocorreu um erro inesperado, tente novamente mais tarde.")
}
}