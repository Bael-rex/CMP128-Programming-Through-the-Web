<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Motivational Quotes</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <button id="quoteButton">Get Motivational Quote</button>
    <div id="quoteDisplay"></div>
    <script src="script.js"></script>
</body>
</html>
document.getElementById('quoteButton').addEventListener('click', displayRandomQuote);

const quotes = [
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it."
];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quoteDisplay').innerText = quote;
}
body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
}
button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 20px;
}
#quoteDisplay {
    font-size: 24px;
    text-align: center;
    max-width: 80%;
}
@media (max-width: 600px) {
    #quoteDisplay {
        font-size: 18px;
    }
}

@media (max-width: 400px) {
    button {
        font-size: 14px;
    }

    #quoteDisplay {
        font-size: 16px;
    }
}
