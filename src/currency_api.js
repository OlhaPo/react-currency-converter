import axios from "axios";

const apiKey = "TDvFkhNzEY3HJLL4Dkyj3fJZTLZQDSyU34ssS29e";
const currencyListUrl = "https://api.freecurrencyapi.com/v1/currencies";
const currencyRateUrl = "https://api.freecurrencyapi.com/v1/latest";

export async function getCurrencyList() {
  const response = await axios(currencyListUrl, {
    params: {
      apikey: apiKey,
    },
  });

  return Object.values(response.data.data ?? {});
}

export async function getRate(baseCurrency, targetCurrency) {
  const response = await axios(currencyRateUrl, {
    params: {
      apikey: apiKey,
      base_currency: baseCurrency,
      currencies: targetCurrency,
    },
  });

  return response.data.data[targetCurrency];
}
