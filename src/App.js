import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import CurrencyRow from "./CurrencyRow";
import Map from "./Map";
import TodoList from "./TodoList.js";
import "./App.css";
import ExchangeRateConverter from "./ExchangeRateConverter";

function App() {
  return (
    <div className="App">
      <div classname="map">
        <Map />
      </div>
      <div className="EXC">

            <Weather />
          <div className="ExchangeRate">
          </div>
          <div className="converter">
            <CurrencyRow
              className="FirstCurrency"
              currencyOptions={currencyOptions}
              selectedCurrency={fromCurrency}
              onChangeCurrency={(e) => setFromCurrency(e.target.value)}
              onChangeAmount={handleFromAmountChange}
              amount={fromAmount}
            />
            <CurrencyRow
              class="SecondCurrency"
              currencyOptions={currencyOptions}
              selectedCurrency={toCurrency}
              onChangeCurrency={(e) => setToCurrency(e.target.value)}
              onChangeAmount={handleToAmountChange}
              amount={toAmount}
            />
          </div>
            <div className="equals">
              1 {fromCurrency} = {exchangeRate} {toCurrency}
            </div>
      </div>
      <TodoList />
    </div>
  );
}

export default App;