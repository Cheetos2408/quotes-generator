const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btn = document.getElementById("btn");

const API_KEY = "R3xLn8GtOUiL3wJIx40f1w==aPD3Yte8gEu2DpeY";

async function getQuote() {
  quoteEl.textContent = "Загрузка...";
  authorEl.textContent = "";

  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/quotes",
      {
        headers: {
          "X-Api-Key": API_KEY
        }
      }
    );

    const data = await response.json();

    quoteEl.textContent = `"${data[0].quote}"`;
    authorEl.textContent = `— ${data[0].author}`;

  } catch (e) {
    quoteEl.textContent = "Ошибка загрузки ❌";
    console.error(e);
  }
}

btn.addEventListener("click", getQuote);
getQuote();
