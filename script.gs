/**
 * A custom function for Google Sheets to get the live mark price of a specific ticker
 * from Hyperliquid.
 *
 * Usage in Google Sheet: =HYPERLIQUIDSPOTPRICE("UBTC")
 *
 * @param {string} tickerSymbol The symbol of the cryptocurrency (e.g., "UBTC", "UETH", "HYPE").
 * @return {number|string} The live mark price or an error message.
 * @customfunction
 */
function HYPERLIQUIDSPOTPRICE(tickerSymbol) {
  const API_URL = 'https://api.hyperliquid.xyz/info';

  const payload = JSON.stringify({
    type: 'spotMetaAndAssetCtxs'
  });

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: payload,
    muteHttpExceptions: true // Prevents script from crashing on HTTP errors
  };

  try {
    const response = UrlFetchApp.fetch(API_URL, options);
    const responseCode = response.getResponseCode();
    const responseText = response.getContentText();
    Logger.log(responseCode);
    if (responseCode === 200) {
      const data = JSON.parse(responseText);
      const tokens = data[0].tokens;
      const universe = data[0].universe;
      const meta = data[1];
      try{
        const index = tokens.find(token => token.name === tickerSymbol).index;
        if (index === null) {
          return "Symbol not found: " + tickerSymbol;
        }
        const coinAt = universe.find(pair => pair.tokens[0] == index).name;
        const price = meta.find(m => m.coin == coinAt).midPx; 
        return price
      } catch (e) {
        Logger.log(e);
        return "Symbol not found: " + tickerSymbol;
      }
    } else {
      return 'API Error: ' + responseCode;
    }
  } catch (e) {
    return 'Script Error: ' + e.message;
  }
}

