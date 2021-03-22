import styled from "styled-components"

const Button = styled.button`
    background: white;
    border-radius: 20px;
    border: 0;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.5s;
    opacity: 0.8;

    &:hover {
        opacity: 1;
    }
`

export const AddToCartButton = (pokemon) => <Button onClick={(e) => {
    e.preventDefault();

    window.dispatchEvent(
        new CustomEvent('added-to-cart', {detail: pokemon})
    )
}}>
    Add To Cart
</Button>