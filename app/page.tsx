"use client";

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { setPage, fetchPokemons } from '@/store/slice';
import Link from 'next/link';

export default function Home() {
  const { pokemons, page } = useSelector((state: RootState) => state.pokemons);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPokemons(page));
  }, [page]);

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <div>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item mx-2">
            <button className={`btn btn-dark ${(page === 1 ? " disabled" : "")}`} aria-label="Previous" onClick={() => handlePageChange(page - 1)} >
              <span aria-hidden="true">&laquo; Önceki Sayfa</span>
            </button>
          </li>
          <li className="page-item mx-2">
            <button className="btn btn-dark" aria-label="Next" onClick={() => handlePageChange(page + 1)}>
              <span aria-hidden="true">Sonraki Sayfa &raquo;</span>
            </button>
          </li>
        </ul>
      </nav>

      <div className='py-4'>
        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {
              pokemons?.map((pokemon: any) => (
                <div className='col' key={pokemon.url}>
                  <div className='card shadow-sm'>
                    <div className='card-body p-0'></div>
                    <Link href={`/${pokemon.name}`} className="btn btn-outline-dark p-4" key={pokemon.name} >
                      {pokemon.name.toUpperCase()} <span>-&gt;</span>
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}