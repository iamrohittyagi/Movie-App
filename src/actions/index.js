// {
//   type:'ADD-MOVIES',
// //   movies:[m1,m2,m3],
// }

// import { data } from "../data";

// {
//     type:  "DECREASE_COUNT",
// }


// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_MOVIES_TO_LIST = 'ADD_MOVIES_TO_LIST';






// action creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies,
    }
}

// action creators
export function addFavourite(movie) {
    return {
        type: ADD_TO_FAVOURITES,
        movie
    }
}

// action creators
export function removeFromFavourites(movie) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}

// action creators
export function setShowFavourites(val) {
    return {
        type: SET_SHOW_FAVOURITES,
        val
    }
}

export function addMoviesToList(movie){
    return{
        type: ADD_MOVIES_TO_LIST,
        movie
    }
}

export function handleMovieSearch(movie) {
    const url = `http://www.omdbapi.com/?t=${movie}&apikey=230df501`;

    return function (dispatch) {
        fetch(url)
            .then(response => response.json())
            .then(movie => {
                console.log('movie', movie)

                // dispatch an action
                dispatch(addMovieSearchResult(movie))
            })
    }
}

export function addMovieSearchResult(movie){
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }

}