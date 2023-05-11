function updateAssets() {
  function appendAssetWithLineBreaks(asset, container) {
    const pElement = document.createElement('p');
    pElement.textContent = `Symbol: ${asset.symbol}`;

    const toggleInfo = () => {
      if (pElement.innerHTML === `Symbol: ${asset.symbol}`) {
        pElement.innerHTML = `ID: ${asset.id}<br>Symbol: ${asset.symbol}<br>Change: ${asset.changePercent24Hr}%<br>Price: $${asset.priceUsd}<br><br>`;
      } else {
        pElement.innerHTML = `Symbol: ${asset.symbol}`;
      }
    };

    const revealId = () => {
      pElement.textContent = `ID: ${asset.id}`;
    };

    const resetSymbol = () => {
      pElement.textContent = `Symbol: ${asset.symbol}`;
    };

    pElement.addEventListener('click', toggleInfo);
    pElement.addEventListener('mouseover', revealId);
    pElement.addEventListener('mouseout', resetSymbol);

    container.appendChild(pElement);
  }



  function fetchAndDisplayAssets() {
    fetch('https://api.coincap.io/v2/assets', {
      headers: {
        'Accept-Encoding': 'gzip'
      }
    })
      .then(response => response.json())
      .then(data => {
        const assets = data.data;

        // Sort assets by changePercent24Hr in descending order
        assets.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr);

        // Grab the top 3 assets
        const top3Assets = assets.slice(0, 3);

        // Clear the 'hotcrypto' div before updating
        const hotcryptoDiv = document.getElementById('hotcrypto');
        hotcryptoDiv.innerHTML = '';

        // Append the assets with line breaks to the 'hotcrypto' div
        top3Assets.forEach(asset => {
          appendAssetWithLineBreaks(asset, hotcryptoDiv);
        });

        // Sort assets by changePercent24Hr in ascending order
        assets.sort((a, b) => a.changePercent24Hr - b.changePercent24Hr);

        // Grab the bottom 3 assets
        const bottom3Assets = assets.slice(0, 3);

        // Clear the 'coldcrypto' div before updating
        const coldcryptoDiv = document.getElementById('coldcrypto');
        coldcryptoDiv.innerHTML = '';

        // Append the assets with line breaks to the 'coldcrypto' div
        bottom3Assets.forEach(asset => {
          appendAssetWithLineBreaks(asset, coldcryptoDiv);
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }

  fetchAndDisplayAssets(); // Fetch and display assets initially

  // Update assets every minute (60,000 milliseconds)
  setInterval(fetchAndDisplayAssets, 60000);
}

updateAssets(); // Call the function to load assets when the page first opens
