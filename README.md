# Fire and Ice Crypto Tracker

Fire and Ice Crypto Tracker is a single-page application that fetches data from the CoinCap API 2.0, and displays the 3 highest and lowest performing cryptocurrencies based off of their percent change in price over the last 24 hours. The goal of this project is to create a very simple cryptocurrency tracker that is very easy to use, even for someone who has never heard of cryptocurrerncy or is familiar with investing, by giving the top and bottom 3 performing coins in real time without any prior research or analysis.

## Usage

Upon loading the page, data will be fetched immediately and tickers will be displayed under the "fire" and "ice" sections based off of their past 24 hour price change, with "fire" being the highest performing tickers, and "ice" being the lowest performing. Using the mouse to hover over a ticker will prompt the user to click for more information, which will reveal a few more details about the ticker that was clicked on. To hide the details, click again or move the mouse away from the ticker. New data will be fetched every 30 seconds, and tickers will update accordingly.

## Acknowledgement

https://docs.coincap.io/ - CoinCap API 2.0 <br>
https://www.deviantart.com/tolyanmy - Dogecoin Wallpaper <br>
https://codepen.io/DuskoStamenic/pen/QWaoBPY - Hover Effect used on Title <br>