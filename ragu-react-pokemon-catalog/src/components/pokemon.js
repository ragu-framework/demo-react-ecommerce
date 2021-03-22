import styled from 'styled-components';
import {AddToCartButton} from './add-to-cart-button';

const ActionBar = styled.div`
    background: linear-gradient(86.92deg, #bf265e 5.1%, rgba(255, 255, 255, 0) 97.29%), #f1ab42;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px 20px 0 0;

    h2 {
        margin: 0 0 20px 0;
    }

    transition: all 0.25s;
    transform: translateY(60px);
`;

const PokemonWrapper = styled.div`
    border: 10px solid #bf265e;
    border-radius: 20px;
    text-align: center;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    img {
        align-self: center;
        max-height: 180px;
        max-width: 65%;
        box-sizing: border-box;
        margin: 20px;
        cursor: pointer;
    }

    &:hover {
        ${ActionBar}{
            transform: translateY(0);
        }
    }
`;

export const Pokemon = ({pokemon}) => {
    const name = pokemon.name.english;
    const sprite = `https://img.pokemondb.net/artwork/large/${name.toLowerCase()}.jpg`;

    return <PokemonWrapper>
        <img src={sprite} alt={name} onClick={() => {
            window.dispatchEvent(new CustomEvent('show-pokemon', {detail: pokemon}))
        }} />

        <ActionBar>
            <h2>{name}</h2>
            <AddToCartButton pokemon={pokemon} />
        </ActionBar>
    </PokemonWrapper>
}