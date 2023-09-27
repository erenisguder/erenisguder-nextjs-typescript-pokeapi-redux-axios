"use client";

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchPokemon } from '@/store/slice';
import Link from 'next/link';
import Loading from '@/components/loading';
import Error from '@/components/error';
import Pokemon from '@/components/pokemon';

export default function Detail({ params }: { params: { name: string } }) {
    const { name } = params
    const { pokemon, loading, error } = useSelector((state: RootState) => state.pokemons);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchPokemon(name));
    }, [name]);

    if (loading) {
        <Loading />
    }

    if (error) {
        <Error error={error} />
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col d-flex justify-content-center'>
                    <Link href={`/`} className="btn btn-dark">
                        <span>&lt;-</span>Go back
                    </Link>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Pokemon pokemon={pokemon} />
                </div>
            </div>
        </div>
    )
}