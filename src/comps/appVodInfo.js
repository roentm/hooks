import React, { useEffect, useState } from 'react'
import {useParams,useNavigation, BrowserRouter } from 'react-router-dom'
import { urlAPI } from '../const';

export default function AppVodInfo() {
    const params= useParams();
    const [movie,setMovie]=useState({});
    const nav=useNavigation();

    useEffect(()=>{
        doAPI();
    },[]);

    const doAPI=async()=>{
        try{
            const resp=await fetch(urlAPI+'i='+params["id"]);
            const data=await resp.json();

            setMovie(data);
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <div className='container-fluid bg-white'>
        <div className='container p-2 text-center'>
            <img src={movie.Poster} alt={movie.Title} className='col-md-3'/>
            <h2>{movie.Title}</h2>
            <div>Runtime: {movie.Runtime}</div>
            <div>Rating: {movie.imdbRating}</div>
            <div>Genere: {movie.Genre}</div>
            <div>Plot: {movie.Plot}</div>
            <button className='btn btn-dark mt-3' onClick={()=>{
                nav(-1)
            }}>Back to list</button>
        </div>
    </div>
    
  )
}
