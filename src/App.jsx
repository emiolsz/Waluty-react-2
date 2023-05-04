import { useState } from 'react'
import './App.css'
import logo from './assets/logo.jpg'
import Logo from './components/Logo/Logo'
import Title from './components/Title/Title'
import Label from './components/Label/Label'
import Select from './components/Select/Select'
import Input from './components/Input/Input'
import Button from './components/Button/Button'
import Result from './components/Result/Result'
import Error from './components/Error/Error'

function App() {
  const [selectedCurrency, setselectedCurrency] = useState("EUR");
  const [inputValue, setInputValue] = useState(0);
  const [textToShow, setTextToShow] = useState("");
  const [showError, setShowError] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const currencies = [
    { value: "EUR", label: "Euro" },
    { value: "USD", label: "Dolar amerykański" },
    { value: "CHF", label: "Frank szwajcarski" }
  ];

  const convertCurrency = (rate) => {
    const result = inputValue * rate;
    setTextToShow(`${inputValue} ${selectedCurrency} = ${result.toFixed(2)} PLN`);
  }


  const getExchangeRates = (event) => {
    event.preventDefault();
    const url = `https://api.nbp.pl/api/exchangerates/rates/A/${selectedCurrency}/?format=json`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data?.rates?.length > 0) {
          setShowError(false);
          convertCurrency(data.rates[0].mid);
        } else {
          setShowError(true);
        }
      })
      .catch(() => setShowError(true));
  }

  const onChangeSelectValue = (value) => {
    setselectedCurrency(value);
  };

  const onChangeInputValue = (value) => {
    if (value > 0) {
      setInputValue(value);
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Logo src={logo} />
      {showError ? <Error /> : null}
      <Title title="Kalkulator walut" />
      <form onSubmit={e => getExchangeRates(e)} className="calculator-form">
        <Label HTMLFor="currency" text="Wybierz walutę:" />
        <Select items={currencies} id="currency" onChangeValue={onChangeSelectValue} />
        <Label HTMLFor="amount" text="Podaj kwotę:" />
        <Input type="number" id="amount" onChangeValue={onChangeInputValue} />
        <Button type="submit" text="Przelicz" disabled={disabled} />
      </form>
      <Result text={textToShow} />
    </>
  )
}

export default App
