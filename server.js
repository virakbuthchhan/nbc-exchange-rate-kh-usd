const express = require("express");
const puppeteer = require("puppeteer");
const app = express();
const PORT = process.env.PORT || 3333;

// Launch browser once at startup (for efficiency)
let browser;

(async () => {
  console.log("Launching Puppeteer browser...");
  browser = await puppeteer.launch({
    headless: "new", // or true
    args: ["--no-sandbox", "--disable-setuid-sandbox"], // useful for some servers
  });
})();

// Graceful shutdown
process.on("SIGINT", async () => {
  await browser?.close();
  process.exit(0);
});

// GET /api/exchange-rate
app.get("/api/exchange-rate", async (req, res) => {
  if (!browser) {
    return res.status(503).json({ error: "Browser not ready" });
  }

  let page;
  try {
    page = await browser.newPage();
    await page.goto(
      "https://www.nbc.gov.kh/english/economic_research/exchange_rate.php",
      {
        waitUntil: "networkidle2",
        timeout: 10000,
      },
    );

    const officialRate = await page.evaluate(() => {
      const tds = Array.from(document.querySelectorAll("td"));
      const targetTd = tds.find((td) =>
        td.textContent?.includes("Official Exchange Rate"),
      );
      if (!targetTd) return null;
      const font = targetTd.querySelector('font[color="#FF3300"]');
      return font ? font.textContent.trim() : null;
    });

    if (!officialRate) {
      return res
        .status(404)
        .json({ error: "Official exchange rate not found on page" });
    }

    res.json({
      success: true,
      currency: "KHR/USD",
      officialExchangeRate: Number(officialRate),
      scrapedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Scraping error:", err);
    res
      .status(500)
      .json({ error: "Failed to scrape exchange rate", message: err.message });
  } finally {
    if (page) await page.close();
  }
});

// Optional: Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Exchange rate API running on http://localhost:${PORT}`);
});
