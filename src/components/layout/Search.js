import React from 'react'

const Search = () => {
    return (
        <div>
            <form>
                <input 
                    type='text'
                    name='search'
                    placeholder='Search...'
                />
                
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Search
