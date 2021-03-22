import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Icon from './icon.png';

const CartCountWrapper = styled.div`
    background: linear-gradient(86.92deg, #bf265e 5.1%, rgba(255, 255, 255, 0) 97.29%), #f1ab42;
    display: inline-flex;
    padding: 10px;
    border-radius: 20px;
    font-family: sans-serif;
`;

const CounterWrapper = styled.div`
    background: white;
    padding: 1px 5px;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-left: 10px;
`;

export const CartCount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const eventListener = () => {
            setCount(count + 1);
        };

        window.addEventListener('added-to-cart', eventListener);

        return () => {
            window.removeEventListener('added-to-cart', eventListener);
        }
    }, [count]);

    return <CartCountWrapper>
        <img src={Icon} />
        <CounterWrapper>{count}</CounterWrapper>
    </CartCountWrapper>
}