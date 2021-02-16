import MovieCard from './assets/MovieCard';
import { starTab } from './assets/Data'
import { useState } from 'react';



const MovieList = ({ movieList }) => {

    const [search, setSearch] = useState('')
    const handleSearch = (e) => {
        setSearch(e.target.value)

    }
    const [starList, setStarList] = useState(starTab)
    const changeColor = (id) => {
        setStarList(starList.map(el => el.id === id ? { icon: el.icon, isColored: !el.isColored, id: el.id } : el))
    }


    return (
        <div>
            <div className="d-flex justify-content-end mt-3">
                <input type="text" placeholder="search" className='col-md-7' onChange={handleSearch} />
                {starList.map(el => <span className={el.isColored?'star-colored':'star'} key={el.id} onClick={() => changeColor(el.id)} >
                    {el.icon}
                </span>)}
            </div>
            <div className="row">
                {movieList.filter(movie => movie.Title.toUpperCase().includes(search.toLocaleUpperCase()))
                    .filter(movie => movie.Rate >= starList.filter(el => el.isColored === true).length)
                    .map((Movies, index) => (
                        <MovieCard key={index} Movies={Movies} />
                    ))}
            </div>
        </div>
    )
}

export default MovieList
