const express = require('express')
const app = express()
const {getMovies}  = require('./infrastructure/movieService')
const bodyParser = require('body-parser')
const {buildApiResult} = require('./api-result/apiResult')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))




app.get('/movie', async (req, res)=>{
    
    let movies = []
    try{
        const {page} = req.query
        movies = await getMovies(page)
        console.log(movies)
    }catch(error){
        console.log(error)
        return res.status(error?.status_code).json(error)
    }
    return res.json(buildApiResult(movies, 200))
})

const config = require('config');

const PORT = config.get('port');

app.listen(PORT,()=>{
    console.info(`Listen in port: ${PORT}`)
})