fetch('https://api.coincap.io/v2/assets')
  .then(response => response.json())
  .then(data => {
    const assets = data.data;

    // Sort assets by changePercent24Hr in descending order
    assets.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr);

    // Grab the top 3 assets
    const top3Assets = assets.slice(0, 3);

    // Create an array of strings containing the ID, symbol, changePercent24Hr, and priceUSD values for the top assets
    const topAssetStrings = top3Assets.map(asset => `ID: ${asset.id}, Symbol: ${asset.symbol}, Change: ${asset.changePercent24Hr}%, Price: $${asset.priceUsd}`);

    // Append the strings to the 'hotcrypto' div
    const hotcryptoDiv = document.getElementById('hotcrypto');
    topAssetStrings.forEach(assetString => {
      const pElement = document.createElement('p');
      pElement.textContent = assetString;
      hotcryptoDiv.appendChild(pElement);
    });

    // Sort assets by changePercent24Hr in ascending order
    assets.sort((a, b) => a.changePercent24Hr - b.changePercent24Hr);

    // Grab the bottom 3 assets
    const bottom3Assets = assets.slice(0, 3);

    // Create an array of strings containing the ID, symbol, changePercent24Hr, and priceUSD values for the bottom assets
    const bottomAssetStrings = bottom3Assets.map(asset => `ID: ${asset.id}, Symbol: ${asset.symbol}, Change: ${asset.changePercent24Hr}%, Price: $${asset.priceUsd}`);

    // Append the strings to the 'coldcrypto' div
    const coldcryptoDiv = document.getElementById('coldcrypto');
    bottomAssetStrings.forEach(assetString => {
      const pElement = document.createElement('p');
      pElement.textContent = assetString;
      coldcryptoDiv.appendChild(pElement);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
