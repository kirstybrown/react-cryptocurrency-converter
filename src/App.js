import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import imagen from './cryptomonedas.png';
import Form from './components/Form';
import Conversion from './components/Conversion';
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  const [currency, saveCurrency] = useState('');
  const [cryptocurrency, saveCryptocurrency] = useState('');
  const [result, saveResult] = useState({});
  const [loading, saveLoading] = useState(false);

  useEffect(() => {

    const convertCryptocurrency = async () => {

      // We avoid executing the first time
      if(currency === '') return;

      // Consult the API to get conversion rates
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

      const result = await axios.get(url);

      // Show spinner
      saveLoading(true);

      // Hide spinner and show reulst
      setTimeout(() => {

        // change state of loading
        saveLoading(false);

        // save conversion
        saveResult(result.data.DISPLAY[cryptocurrency][currency] );
      }, 3000);

      
    }
    convertCryptocurrency();

  }, [currency, cryptocurrency]);

  // Show spinner or result
  const component = (loading) ? <Spinner /> : <Conversion result={result} />

  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt="imagen cripto"
        />
      </div>
      <div>
        <Heading>Convert Cryptocurrency Instantly</Heading>

        <Form 
          saveCurrency={saveCurrency}
          saveCryptocurrency={saveCryptocurrency}
        />

        {component}
      </div>
    </Contenedor>
  );
}

export default App;
