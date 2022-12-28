import axios from 'axios';
import React, { Suspense } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { apiURL } from '../../consts';
import PageCounter from './movies/pageCounter'
import SearchBar from './movies/SearchBar';
import YearPicker from './movies/yearPicker';


const Movies = () => {
  const [pages,setPages]=useState(0);
  const [movies,setMovies] = useState([]);
  const [querys,setQuerys]=useSearchParams();
  const [loading,setLoading] = useState(true);

  const pickYear=(_year) =>{setQuerys({s:querys.get("s"),year:_year, page:'1'})}
  const pickPage=(_page)=>{setQuerys({s:querys.get("s"),page:_page,year:querys.get("year")||null})}
  const searchInput=(_input)=>{if(_input.length<3){return}else{setQuerys({s:_input,page:'1'})}}


  const doAPI= async (_searchQ) => {
   
    try{
      setLoading(true);
      setMovies([]);
      const yearQ=(querys.get('year'))?`&y=${querys.get('year')}`:``;
      const {data}=await axios.get(apiURL+'s='+_searchQ+'&page='+querys.get('page')+yearQ);
      const seraching = data.Search;
    
      let pageCount= Math.ceil(data.totalResults/10);
      setMovies(seraching);
      setPages(pageCount);
      console.log(seraching)
      setLoading(false);
    }
    catch(err){
      console.log(err);
    }
  };

  useEffect(()=>{
    const searchQ=querys.get("s")||"bank";
    doAPI(searchQ)},[querys]);
    
    const posterStyle={
      width:'100%',
    }
  return (
    <>
    <SearchBar searchInput={searchInput}/>
    <YearPicker pickYear={pickYear} />
    <PageCounter pages={pages} pickPage={pickPage}/>


    <div className='container'>
      {loading && movies.length ? <p>Loading...</p>:
      <div className='row'>

        
        {movies?.map(movie =>(
            <div key={movie.imdbID} className='col-md-4 p-2'>
              <div className='border p-2 h-100 overflow-hidden shadow position-relative'>
                <img src={movie.Poster} className='float-start me-2 w-25' />
                <h3>{movie.Title}</h3>
                <div>Year: {movie.Year}</div>
                <button className='btn btn-dark position-absolute bottom-0 end-0' >More Info</button>
              </div>
            </div>
        ))}
       
      </div>}

    </div>

    
    </>
  )
}

export default Movies