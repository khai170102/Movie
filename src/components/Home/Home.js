import React from 'react';
import { useEffect } from 'react';
import "./Home.scss"
import { useDispatch } from 'react-redux';
import movieApi from "../../common/apis/movieApi"
import {APIKey} from "../../common/apis/MovieApiKey"
import MovieListing from '../MovieLingsting/MovieListing.js';
import { addMovie } from '../../features/movies/movieSlice';
const Home = () => {
    const movieText="Harry";
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMovies= async()=>{
            const response = await movieApi
            .get(`?apiKey=${APIKey}
            &s=${movieText}&type=movie`)
            .catch((err)=>{
             console.log("ERR:",err);
            });
            console.log(response)
            dispatch(addMovie(response.data));
        };
        fetchMovies();
    });
    return (
        <div className='home'>
            <MovieListing/>
        </div>
    );
};

export default Home;