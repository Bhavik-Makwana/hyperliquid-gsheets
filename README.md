# Google Sheets Hyperliquid Spot Price

Fetch the live mark price of assets on the Hyperliquid DEX. This project can definitely be extended further but this was the main functionality I wanted.

## Functions
- `=HYPERLIQUIDSPOTPRICE(tickerSymbol)` - Get the midPx of the provided asset

  
# 🚀 How to Use
Follow these steps to deploy and use the custom function in your Google Sheet:

1. Open Your Google Sheet
   Navigate to Google Sheets and open the spreadsheet where you want to add this function.
2. Open the Apps Script EditorIn your Google Sheet, click on Extensions in the top menu.
   Hover over Apps Script and then click on Open Script editor. This will open a new browser tab with the Apps Script editor.
3. Paste the CodeIn the Apps Script editor, you'll see a file named Code.gs (or similar) on the left sidebar
   Delete any default code present in Code.gs.
   replace with the contents of `script.gs`
 
4. Save the Project
5. Authorize the Script (First Time Only)
  
# 📊 Example Usage in Google Sheets

| Formula | Result (Example) |
|---------|----------------|
| =HYPERLIQUIDSPOTPRICE("UBTC") | 65432.10 |
| =HYPERLIQUIDSPOTPRICE("UETH") | 3210.98 |
| =HYPERLIQUIDSPOTPRICE("HYPE") | 0.00123 |
| =HYPERLIQUIDSPOTPRICE("UNKNOWN") | Symbol not found: UNKNOWN |

 
 
 Alternatively I believe you can use https://script.google.com/macros/library/d/1Irw5mofaWlyEs98MraTqr4us_EcqKz_isTSyIVBwz6kwdaSmYSDpg9X_/1