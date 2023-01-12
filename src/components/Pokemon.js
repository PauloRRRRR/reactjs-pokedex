import React from 'react';

const Pokemon = (props) => {
    const {pokemon} = props
    const onHeartClick = () => {
        console.log("Favoritar")
    }
    const heart = "💖"
    return(
        <div className='pokemon-card'>
            <div className='pokemon-image-container'>
                <img alt={pokemon.name} src={pokemon.sprites.front_default} className='pokemon-img'></img>
            </div>
            <div className='card-body'>
                <div className='card-top'>
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className='card-bottom'>
                    <div className='pokemon-type'>
                        <h3>{pokemon.types.map((type, index) => {
                            return(
                                <div key={index} className='pokemon-type-text'>{type.type.name}</div>
                            )
                        })}</h3>
                    </div>
                    <button className='pokemon-heart-btn' onClick={onHeartClick}>
                        {heart}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;