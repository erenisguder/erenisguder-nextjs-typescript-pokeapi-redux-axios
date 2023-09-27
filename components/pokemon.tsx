import Image from "next/image";

export default function Pokemon({ pokemon }: { pokemon: any }) {
    return (
        <div className="card my-4 mx-auto p-4" style={{ maxWidth: "400px" }}>
            {pokemon ? (
                <>
                    <Image
                        className="card-img-top"
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt={pokemon.name}
                        width={350}
                        height={400}
                    />
                    <div className="card-body">
                        <h3 className="card-title text-center">{pokemon.name.toUpperCase()}</h3>
                        <p className="card-text text-center">Weight: {pokemon.weight}</p>
                        <p className="card-text text-center">Height: {pokemon.height}</p>
                    </div>
                </>
            ) : (
                <div className="card-body">
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}