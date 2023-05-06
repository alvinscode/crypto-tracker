fetch('https://api.coincap.io/v2/assets')
  .then(response => response.json())
  .then(data => {
    const assets = data.data;

    // Sort assets by changePercent24Hr in descending order
    assets.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr);

    // Grab the top 3 assets
    const top3Assets = assets.slice(0, 3);

    // Create an array of strings containing the id and changePercent24Hr values
    const assetStrings = top3Assets.map(asset => `ID: ${asset.id}, Change: ${asset.changePercent24Hr}%`);

    // Append the strings to the 'crypto1' div
    const crypto1Div = document.getElementById('hotcrypto');
    assetStrings.forEach(assetString => {
      const pElement = document.createElement('p');
      pElement.textContent = assetString;
      crypto1Div.appendChild(pElement);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });

  fetch('https://api.coincap.io/v2/assets')
  .then(response => response.json())
  .then(data => {
    const assets = data.data;

    // Sort assets by changePercent24Hr in ascending order
    assets.sort((a, b) => a.changePercent24Hr - b.changePercent24Hr);

    // Grab the bottom 3 assets
    const bottom3Assets = assets.slice(0, 3);

    // Create an array of strings containing the id and changePercent24Hr values
    const assetStrings = bottom3Assets.map(asset => `ID: ${asset.id}, Change: ${asset.changePercent24Hr}%`);

    // Append the strings to the 'coldcrypto' div
    const coldcryptoDiv = document.getElementById('coldcrypto');
    assetStrings.forEach(assetString => {
      const pElement = document.createElement('p');
      pElement.textContent = assetString;
      coldcryptoDiv.appendChild(pElement);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });