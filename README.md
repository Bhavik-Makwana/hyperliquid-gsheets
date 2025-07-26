# Google Sheets Hyperliquid Spot Price

Fetch the live mark price of assets on the Hyperliquid DEX. This project can definitely be extended further but this was the main functionality I wanted.

## Functions
- `=HYPERLIQUIDSPOTPRICE(tickerSymbol)` - Get the midPx of the provided asset

  
## How to Use
1. Open Apps Script Editor in your Google Sheet via the Extensions menu.
2. Paste the Code in and authorize for first-time use
3. Save the Project

Alternatively I believe you can use a deployed library https://script.google.com/macros/library/d/1Irw5mofaWlyEs98MraTqr4us_EcqKz_isTSyIVBwz6kwdaSmYSDpg9X_/1

## Example Usage

| Formula | Result (Example) |
|---------|----------------|
| =HYPERLIQUIDSPOTPRICE("UBTC") | 118000.10 |
| =HYPERLIQUIDSPOTPRICE("UETH") | 3210.98 |
| =HYPERLIQUIDSPOTPRICE("HYPE") | 44.3 |
| =HYPERLIQUIDSPOTPRICE("UNKNOWN") | Symbol not found: UNKNOWN |

 
 
