import React from 'react';
import styled from '@emotion/styled';

const ResultDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Paragraph = styled.p`
    font-size: 18px;
    span {
        font-weight: bold;
    }
`;

const Price = styled.p`
    font-size: 30px;
    span {
        font-weight: bold;
    }
`;

const Conversion = ({result}) => {
    if(Object.keys(result).length === 0) return null;


    console.log(result);

    return (
        <ResultDiv>
            <Price>The price is: <span>{result.PRICE}</span></Price>
            <Paragraph>Highest price today: <span>{result.HIGHDAY}</span></Paragraph>
            <Paragraph>Lowest price today: <span>{result.LOWDAY}</span></Paragraph>
            <Paragraph>Variation during last 24hours: <span>{result.CHANGEPCT24HOUR}</span></Paragraph>
            <Paragraph>Latest update: <span>{result.LASTUPDATE}</span></Paragraph>
        </ResultDiv>
    )
}

export default Conversion;