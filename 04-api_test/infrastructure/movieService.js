const { default: axios } = require('axios');
const config = require('config');
const BASE_URL = config.get('movieApi.baseUrl')
const API_KEY = config.get('movieApi.apiKey')
const LANGUAGE = config.get('movieApi.language')

module.exports.getMovies = async(pageRequired = 1) =>{
    return axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE}-US&page=${pageRequired}`)
        .then(response=>response.data)
        .catch(error => error.data)
}