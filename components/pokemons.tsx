import Link from "next/link";

export default function Pokemons({ pokemons }: { pokemons: any[] }) {
    return (
        <div className='py-4'>
            <div className='container'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    {pokemons?.map((pokemon: any) => (
                        <div className='col' key={pokemon.url}>
                            <div className='card shadow-sm'>
                                <div className='card-body p-0'></div>
                                <Link href={`/${pokemon.name}`} className="btn btn-outline-dark p-4" key={pokemon.name} >
                                    {pokemon.name.toUpperCase()} <span>-&gt;</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}