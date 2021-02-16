import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import { moviesList } from './components/assets/Data';
import AddMovie from './components/assets/AddMovie';
import {BrowserRouter ,Switch, Route} from 'react-router-dom'
import Description from './components/Description';



const App = () => {
    const [movieList, setMovieList] = useState(moviesList)
    const addMovie = (Title, Poster, Description, Rate) => {
        setMovieList([...movieList, { Title: Title, Poster: Poster, Description: Description, Rate: Rate }])
    }

    return (
        <div className="container-fluid">
            <div>
                <BrowserRouter>
                    <Switch>
                    <Route exact path='/' render={(props)=><MovieList movieList={movieList} {...props} />} />
                        <Route exact path='/' render={(props)=><AddMovie addMovie={addMovie} {...props} />} />
                        <Route exact path='/description/:title' render={(props)=><Description movieList={movieList} {...props} />} />
                    </Switch>
                </BrowserRouter>

            </div>

        </div>
    )
}

export default App
