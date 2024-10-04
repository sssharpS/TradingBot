# Trading Bot

This Node.js backend simulates a basic stock trading bot with a simple buy/sell strategy based on stock price fluctuations.

## Setup

1. Clone the repository: git clone<repo_url>
2. Install dependencies:npm install
3. Create a `.env` file and specify the port:PORT=3000
4. Run the server:npm start


## Trading Logic

- The bot buys stocks when the price drops by 2% and sells them when the price rises by 3%.
- Mock data simulates the stock price changing over time.

## API Endpoints

- `GET /api/start-bot` - Starts the trading bot.
- `GET /api/profit-loss` - Displays the current balance, stocks owned, and profit/loss statement.
