const getQuote = async () => {
  const inspirationalQuoteContent = document.getElementById(
    "inspirational-quote__content"
  );
  const inspirationalQuoteAuthor = document.getElementById(
    "inspirational-quote__author"
  );

  const defaultQuote = {
    content: `“It is not the mountain we conquer, but ourselves.”`,
    author: `Sir Edmund Hillary`,
  };

  let fetchedQuote = "";

  await fetch("https://api.quotable.io/random?tags=motivational")
    .then((response) => response.json())
    .then((data) => (fetchedQuote = data))
    .catch((e) => console.error(e.message));

  if (fetchedQuote) {
    inspirationalQuoteContent.innerText = fetchedQuote.content;
    inspirationalQuoteAuthor.innerText = `— ${fetchedQuote.author}`;
  } else {
    inspirationalQuoteContent.innerText = defaultQuote.content;
    inspirationalQuoteAuthor.innerHTML = `— ${defaultQuote.author}`;
  }
};

export default getQuote;
