import React from "react";
import styled from "@emotion/styled";
import useCurrency from "./hooks/useCurrency";

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

    const CURRENCIES = [
        {code: 'USD', name: 'US Dollars'},
        {code: 'MXN', name: 'Mexican Pesos'},
        {code: 'EUR', name: 'Euros'},
        {code: 'GBP', name: 'British Pounds'}
    ]

    // Use useCurrency
    const [currency, SelectCurrency] = useCurrency('Choose your currency', '', CURRENCIES);

    return (
        <form>

            <SelectCurrency/>

            <Button
                type="submit"
                value="calculate"
            />
    
        </form>
    );
}

export default Form;