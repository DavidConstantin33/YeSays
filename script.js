const btn = document.getElementById('btn');
const container = document.querySelector('.container');
let quoteEl = null;

const renderQuote = function(data) {
    const quote = data.quote;
    const newQuoteElement = document.createElement('div');
    newQuoteElement.classList.add('quote-parent');
    newQuoteElement.innerHTML = `
        <div class="quote">
            <p>" ${quote} " <br><br> ~ Ye </p>
        </div>`;

    if (quoteEl) {
        container.removeChild(quoteEl); // Remove the old quote element
    }

    quoteEl = newQuoteElement; // Update quote element reference
    container.appendChild(quoteEl); // Append the new quote element
}

btn.addEventListener('click', function() {
    fetch('https://api.kanye.rest')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network problem');
            }
            return response.json();
        })
        .then(data => {
            renderQuote(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});