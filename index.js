function appendAssetWithLineBreaks(asset, container) {
  const pElement = document.createElement('p');
  pElement.innerHTML = `ID: ${asset.id}<br>Symbol: ${asset.symbol}<br>Change: ${asset.changePercent24Hr}%<br>Price: $${asset.priceUsd}<br><br>`;
  container.appendChild(pElement);
}

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

    // Append the assets with line breaks to the 'hotcrypto' div
    const hotcryptoDiv = document.getElementById('hotcrypto');
    top3Assets.forEach(asset => {
      appendAssetWithLineBreaks(asset, hotcryptoDiv);
    });

    // Sort assets by changePercent24Hr in ascending order
    assets.sort((a, b) => a.changePercent24Hr - b.changePercent24Hr);

    // Grab the bottom 3 assets
    const bottom3Assets = assets.slice(0, 3);

    // Append the assets with line breaks to the 'coldcrypto' div
    const coldcryptoDiv = document.getElementById('coldcrypto');
    bottom3Assets.forEach(asset => {
      appendAssetWithLineBreaks(asset, coldcryptoDiv);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
