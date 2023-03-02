import axios from "axios"

const KEY ='e27e533a17eaf10a649cd2113997b376' ;

axios.defaults.baseURL = 'https://api.themoviedb.org/3/' 

export async function trendingMovies (page){
    const response = await axios('trending/all/day', { params:{ api_key: KEY, page }})
    return response.data.results

};

export async function searchMovies(query, page) {
    const response = await axios('/search/movie', { params: { api_key: KEY, page, query } })
    return response.data.results

};

export async function detailesMovies (id){
    const response = await axios(`/movie/${id}`, { params: { api_key: KEY,  } })
    return response.data

};

export async function creditsMovies (id){
    const response = await axios(`/movie/${id}/credits`, { params: { api_key: KEY,  } })

    return response.data.cast

};


export async function reviewsMovies (id, page){
    const response = await axios(`/movie/${id}/reviews`, { params: { api_key: KEY, page } })

    return response.data.results

};
