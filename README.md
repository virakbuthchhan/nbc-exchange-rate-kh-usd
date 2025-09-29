### Installation instruction

#### 1. clone code from github

```bash
git clone https://github.com/virakbuthchhan/nbc-exchange-rate-kh-usd.git
```

#### 2. install depedencies

```bash
cd nbc-exchange-rate-kh-usd && npm install
```

#### 3. start the api

```bash
npm start
```

#### 4. Then access:

```bash
GET http://localhost:3333/api/exchange-rate
```

#### Simple response

```json
{
  "success": true,
  "currency": "KHR/USD",
  "officialExchangeRate": 4008,
  "scrapedAt": "2025-04-05T10:30:00.000Z"
}
```
