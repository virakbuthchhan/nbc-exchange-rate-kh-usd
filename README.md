# 🏦 NBC Exchange Rate API

A lightweight **Express.js REST API** that scrapes the **National Bank of Cambodia (NBC)** official exchange rates using **Puppeteer** and exposes them via a simple JSON endpoint. Perfect for internal systems needing up-to-date KHR exchange rates.

---

## 🌐 Source

Data is scraped from:
👉 [https://www.nbc.gov.kh/english/economic_research/exchange_rate.php](https://www.nbc.gov.kh/english/economic_research/exchange_rate.php)

---

## 🚀 Features

- ✅ Returns **Official Exchange Rate** (KHR/USD)
- ✅ Clean JSON response
- ✅ Error handling & logging
- ✅ Reusable browser instance (efficient for multiple requests)
- ✅ Health check endpoint

---

## 📦 Endpoints

| Method | Endpoint             | Description               |
| ------ | -------------------- | ------------------------- |
| `GET`  | `/api/exchange-rate` | Get official USD/KHR rate |
| `GET`  | `/health`            | Health check              |

### Example Response (`/api/exchange-rates`):

```json
{
  "success": true,
  "currency": "KHR/USD",
  "officialExchangeRate": 4008,
  "scrapedAt": "2025-09-29T07:57:26.975Z"
}
```

---

## 🛠️ Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/virakbuthchhan/nbc-exchange-rate-kh-usd.git
   cd nbc-exchange-rate-kh-usd
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   npm start
   # or
   node server.js
   ```

4. **Test the API**
   ```bash
   curl http://localhost:3333/api/exchange-rate
   ```

---

## ⚙️ Environment

- Node.js >= 18.x
- Puppeteer (automatically installs Chromium)

> 💡 **Note**: On some Linux servers (e.g., Ubuntu), you may need to install additional dependencies for Puppeteer:
>
> ```bash
> sudo apt-get install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
> ```

---

## 📜 License

MIT License – feel free to use in personal or commercial projects.

> ⚠️ **Disclaimer**: This tool is for educational and internal use only. Please respect the [NBC website’s terms of use](https://www.nbc.gov.kh) and avoid excessive requests.

---

## 🙌 Author

- **Your Name**
- GitHub: [@virakbuthchhan](https://github.com/virakbuthchhan)
- Email: chhanvirakbuth1999@gmail.com

---

> 💡 Tip: Consider adding caching (e.g., with `node-cache`) to reduce load on NBC’s server and improve response time!
