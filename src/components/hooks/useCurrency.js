import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    --webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.3rem;
`;


const useCurrency = (label, initialState, options) => {

    // State of our custom hook
    const [state, updateState] = useState(initialState);

    const Select = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e => updateState(e.target.value)}
            >
                <option value="">- Select -</option>
                {options.map(option => (
                    <option key={option.key} value={option.key}>{option.name}</option>
                ))}
            </Select>
        </Fragment>
    );

    // Return state, interface and function that modifies state
    return [state, Select, updateState];
}

export default useCurrency;