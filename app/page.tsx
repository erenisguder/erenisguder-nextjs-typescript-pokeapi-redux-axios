"use client";

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { setPage, fetchPokemons } from '@/store/slice';
import Loading from '@/components/loading';
import Error from '@/components/error';
import Pagination from '@/components/pagination';
import Pokemons from '@/components/pokemons';

export default function Home() {
  const { pokemons, page, loading, error } = useSelector((state: RootState) => state.pokemons);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPokemons(page));
  }, [page]);

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  if (loading) {
    <Loading />
  }

  if (error) {
    <Error error={error} />
  }

  return (
    <div>
      <Pagination page={page} handlePageChange={handlePageChange} />
      <Pokemons pokemons={pokemons} />
    </div>
  )
}