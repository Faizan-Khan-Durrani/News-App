const news = document.getElementById("news");

let word = "virat kohli";

async function FetchNews() {
  try {
    const fetched = fetch(
      `ttps://newsapi.org/v2/everything?q=${word}&from=2025-02-1&sortBy=publishedAt&apiKey=4fbe933697c442e8926000397a4490f8`
    );
    const response = await fetched;
    const data = await response.json();
    parseHTML(data);
  } catch (error) {
    console.error("Error fetching news:", error);
  }
}
FetchNews();
function parseHTML(data) {
  console.log(data);
  console.log(data.articles[0].description);
  console.log("hello", data.articles[0].title);
  console.log(data.articles[0].url);
  console.log(data.articles[0].urlToImage);
  for (let i = 0; i <= 5; i++) {
    const card = document.createElement("div");
    card.setAttribute("class", card);
    card.innerHTML = `
        
         <div class="card">
        <div class="img">
          <img src="${data.articles[i].urlToImage}" alt="" />
        </div>
        <div class="details">
          <h4 id="heading">${data.articles[i].title}</h4>
          <p id="desc">
        ${String(data.articles[i].description).slice(0, 90)}......
          </p>
          <button type="button"><a href="${
            data.articles[i].url
          }">Read More</a></button>
        </div>
      </div> `;
    news.appendChild(card);
  }
}
parseHTML();
