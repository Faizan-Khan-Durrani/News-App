const news = document.getElementById("news");
const search = document.getElementById("search");
let filters = document.querySelectorAll("ul li button");

let word = "virat kohli";
search.addEventListener("click", (e) => {
  word = search.previousElementSibling.value;
  news.innerHTML = ""; 
  FetchNews();
});

filters.forEach((e) => {
  e.addEventListener("click", () => {
    word = e.textContent;
    news.innerHTML = ""; 
    FetchNews();
  });
});

async function FetchNews() {
  try {
    const fetched = fetch(
      `https://newsapi.org/v2/everything?q=${word}&from=2025-02-1&sortBy=publishedAt&apiKey=4fbe933697c442e8926000397a4490f8`
    );
    const response = await fetched;
    const data = await response.json();
    console.log(data);
    parseHTML(data);
  } catch (error) {
    console.error("Error fetching news:", error);
  }
}
FetchNews();
function parseHTML(data) {
  for (let i = 0; i <= 5; i++) {
    const card = document.createElement("div");
    card.setAttribute("class", card);
    card.innerHTML = `
        
         <div class="card">
        <div class="img">
          <img src="${data.articles[i].urlToImage}" alt="" />
        </div>
        <div class="details">
          <h4 id="heading">${String(data.articles[i].title).slice(
            0,
            30
          )}..</h4>
          <p id="desc">
        ${String(data.articles[i].description).slice(0, 90)}......
          </p>
          <button type="button"><a href="${
            data.articles[i].url
          }" target="_blank">Read More</a></button>
        </div>
      </div> `;
    news.appendChild(card);
  }
}
parseHTML();
