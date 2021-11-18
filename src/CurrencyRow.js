import React from "react";

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props;
  return (
    <div>
      <select
        className="select"
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map((option) => (
          <option  key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
    </div>
  );
}
