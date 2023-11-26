const apiKey = '330d15aac2398a7cecc1463363a7663e';
const apiUrl = `https://api.coinlayer.com/live?access_key=${apiKey}`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Check if 'rates'
        if (data && data.rates) {
            displayCryptoPrices(data);
        } else {
            console.error('Invalid data format:', data);
        }
    })
    .catch(error => console.error('Error:', error));

// cryptocurrency prices
function displayCryptoPrices(data) {
    const cryptoPricesContainers = document.querySelectorAll('.prices');

    cryptoPricesContainers.forEach(container => {
        // Create HTML elements to display the prices
        const bitcoinElement = document.createElement('p');
        bitcoinElement.textContent = `Bitcoin Price: ${data.rates.BTC}`;

        const ethereumElement = document.createElement('p');
        ethereumElement.textContent = `Ethereum Price: ${data.rates.ETH}`;

        // Append the elements to the container
        container.appendChild(bitcoinElement);
        container.appendChild(ethereumElement);
    });
}



