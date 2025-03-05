// JavaScript to Display Motivational Quotes
document.getElementById('quoteButton').addEventListener('click', function () {
    const quotes = [
        "Believe in yourself and all that you are.",
        "Your only limit is your mind.",
        "Dream big. Work hard. Stay focused.",
        "Don't stop until you're proud.",
        "The harder you work, the luckier you get."
    ];

    // Get a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Display it in the paragraph
    document.getElementById('quote').textContent = randomQuote;
});
