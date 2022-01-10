import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Error from "./Error";
import useCurrency from "../hooks/useCurrency";
import useCryptocurrency from "../hooks/useCryptocurrency";
import axios, { Axios } from "axios";

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Form = () => {

    // State of the Crypto list
    const [ listCrypto, saveCryptocurrency ] = useState([]);
    const [ error, saveError ] = useState(false);

    const CURRENCIES = [
        {code: 'USD', name: 'US Dollars'},
        {code: 'MXN', name: 'Mexican Pesos'},
        {code: 'EUR', name: 'Euros'},
        {code: 'GBP', name: 'British Pounds'}
    ]

    // Use useCurrency
    const [currency, SelectCurrency] = useCurrency('Choose your currency', '', CURRENCIES);


    // Use useCryptocurrency
    const [cryptocurrency, SelectCrypto] = useCryptocurrency('Choose your Cryptocurrency', '', listCrypto);

    // Execute call to the API
    useEffect(() => {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const result = await axios.get(url);

            saveCryptocurrency(result.data.Data);
        }
        consultAPI();
    }, []);


    // When user selects submit
    const convertCurrency = e => {
        e.preventDefault();

        // Validate that both fields are selected
        if(currency === '' || cryptocurrency === '') {
            saveError(true);
            return;
        }

        // Pass data to main component
        saveError(false);
    }

    return (
        <form
            onSubmit={convertCurrency}
        >
            {error ? <Error message="All fields are obligatory" /> : null}

            <SelectCurrency />

            <SelectCrypto />

            <Button
                type="submit"
                value="calculate"
            />
    
        </form>
    );
}

export default Form;