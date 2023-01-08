import React from 'react';

const Searchbar = () => {
    let search = 'charizard';
    const onChangeHandler = (e) => {
        console.log('pokemon: ', e.target.value)
        search = e.target.value
    }
    return(
        <div className='searchbar-container'>
            <div className='searchbar'>
                <input
                    placeholder='Buscar pokemon' onChange={onChangeHandler}
                >
                
                </input>
                {search}
            </div>
            
        </div>
    )
}

export default Searchbar;