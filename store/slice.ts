import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '@/lib/axios';

const PAGE_SIZE = 9;

export const fetchPokemons = createAsyncThunk(
    'pokemons/getPokemons',
    async (page: number) => {
        const offset = (page - 1) * PAGE_SIZE;
        const { data } = await axios.get(`?offset=${offset}&limit=${PAGE_SIZE}`)
        return data.results;
    }
)

export const fetchPokemon = createAsyncThunk(
    'pokemons/fetchPokemon',
    async (name: string) => {
        const { data } = await axios.get(`/${name}`)
        return data;
    }
)

type Pokemon = {
    name: string;
    url: string;
    sprites: any;
    weight: number;
    height: number;
}

interface PokemonsState {
    pokemons: Array<Pokemon>,
    pokemon: Pokemon | null;
    loading: boolean;
    error: string | null;
    page: number;
}

const initialState: PokemonsState = {
    pokemons: [],
    pokemon: null,
    loading: false,
    error: null,
    page: 1,
}

export const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.loading = false;
                state.pokemons = action.payload;
                state.error = null;
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.loading = false;
                state.error = "Pokemons could not be fetched.";
            })
            .addCase(fetchPokemon.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.loading = false;
                state.pokemon = action.payload;
                state.error = null;
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                state.loading = false;
                state.error = "Pokemon could not be fetched.";
            });
    }
})

export const { setPage } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;