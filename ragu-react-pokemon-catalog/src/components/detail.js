import styled from 'styled-components';
import pokedex from '../data/pokedex.json';
import {AddToCartButton} from './add-to-cart-button'; 

const DetailWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 400px) 1fr;
    grid-gap: 20px;
    font-family: sans-serif;
    align-items: center;

    img {
        max-width: 300px;
        width: 100%;
    }
`;

const DetailContent = styled.main`
    background: linear-gradient(86.92deg, rgb(191, 38, 94) 5.1%, rgba(255, 255, 255, 0) 97.29%), rgb(241, 171, 66);
    color: white;
    display: grid;
    grid-gap: 10px;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-items: center;
    padding: 0 20px;
    border-radius: 20px;
    transition: all 0.25s ease 0s;

    h1 {
        margin: 0 0 20px;
    }
`

export const Detail = ({id}) => {
    if (!id) {
        return <div style={{color: 'red'}}>You must define a <strong>?id=</strong></div>
    }

    const pokemon = pokedex.find((pokemon) => pokemon.id === parseInt(id));

    const name = pokemon.name.english;
    const sprite = `https://img.pokemondb.net/artwork/large/${name.toLowerCase()}.jpg`;
    const strengths = Object.keys(pokemon.base);

    return <DetailWrapper>
        <img src={sprite} alt={name} />
        <DetailContent>
            <div>
                <h1>{name}</h1>

                <div>
                    <strong>Type: </strong>
                    <span>
                        {pokemon.type.join(' / ')}
                    </span>
                </div>
            </div>
            <div>
                <div>
                    <ul>
                        {strengths.map((strength) => <li>{strength}: {pokemon.base[strength]}</li>)}
                    </ul>
                </div>
            </div>
            <AddToCartButton pokemon={pokemon} />
        </DetailContent>
    </DetailWrapper>
}