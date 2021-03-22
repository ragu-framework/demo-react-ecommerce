import styled from 'styled-components';
import pokedex from '../data/pokedex.json';
import {Pokemon} from './pokemon';

const PokemonGrid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const Title = styled.h1`
    font-family: sans-serif;
`;

export const Catalog = () => <section>
    <Title>Pokemon Catalog</Title>

    <PokemonGrid>
        {pokedex.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </PokemonGrid>
</section>