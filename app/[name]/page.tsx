"use client";

import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchPokemon } from '@/store/slice';
import Link from 'next/link';

export default function Detail({ params }: { params: { name: string } }) {
    const { name } = params
    const { pokemon } = useSelector((state: RootState) => state.pokemons);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchPokemon(name));
    }, [name]);

    return (
        <div className='py-4'>
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
                        <div className="card my-4 mx-auto p-4" style={{ maxWidth: "400px" }}>
                            {pokemon?.sprites?.other?.dream_world?.front_default ? (
                                <Image
                                    className="card-img-top"
                                    src={pokemon.sprites.other.dream_world.front_default}
                                    alt="Pokemon Image"
                                    width={400}
                                    height={400}
                                />
                            ) : (
                                <p className='text-center'>Yükleniyor...</p>
                            )}
                            {/* <Image className="card-img-top" src={pokemon?.sprites.other.dream_world.front_default} alt="Pokemon Image" width={400} height={400} /> */}
                            <div className="card-body">
                                <h3 className="card-title text-center">{pokemon?.name.toUpperCase()}</h3>
                                <p className="card-text text-center">Weight: {pokemon?.weight}</p>
                                <p className="card-text text-center">Height: {pokemon?.height}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
