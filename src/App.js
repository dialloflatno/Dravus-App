import React, { useState, useEffect } from "react";
// import MapView from "./MapView";
import Weather from "./Weather";
import CurrencyRow from "./CurrencyRow";
import Map from "./Map";
import TodoList from "./TodoList.js";

import "./App.css";

const BASE_URL =
  "http://api.exchangeratesapi.io/v1/latest?access_key=8088fcbcb995390634c99091a1a8b134&format=1";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <div className="App">
      <div classname="map">
        <Map />
      </div>
      <div className="Container">
        <div className="ExchangeRate">
          <p>Exchange Rate Conversion</p>

          <CurrencyRow
            className="FirstCurrency"
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(e) => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
          />
          <div className="equals">
            1 {fromCurrency} = {exchangeRate} {toCurrency}
          </div>
          <CurrencyRow
            class="SecondCurrency"
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={(e) => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
          />
        </div>
        <div className="weatherdiv">
          <Weather />
        </div>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
