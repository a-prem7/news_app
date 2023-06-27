//API Used: http://newsapi.org/s/canada-news-api
const container = document.querySelector(".container");
const optionsContainer = document.querySelector(".options-container");

const country = "ca";
const options = [
  "general",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

let requestURL;
