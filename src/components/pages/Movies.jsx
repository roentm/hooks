import axios from 'axios';
import React from 'react'
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

  const pickYear=(_year) =>{setQuerys({s:querys.get("s"),year:_year, page:'1'})}
  const pickPage=(_page)=>{setQuerys({s:querys.get("s"),page:_page,year:querys.get("year")||null})}
  const searchInput=(_input)=>{if(_input.length<3){return}else{setQuerys({s:_input,page:'1'})}}


  const doAPI= async (_searchQ) => {
    let data=[];
    try{
      const yearQ=(querys.get('year'))?`&y=${querys.get('year')}`:``;
      const res=await axios.get(apiURL+'s='+_searchQ+'&page='+querys.get('page')+yearQ);
      data=await res.data;
      let results=await data.Search;
      let pageCount= Math.ceil(data.totalResults/10);
      setMovies(results);
      setPages(pageCount);
      console.log(results)
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
    <PageCounter pages={pages} pickPage={pickPage}/>
    <YearPicker pickYear={pickYear} />
    <SearchBar searchInput={searchInput}/>
    <div className='container'>
      <div className='row'>
        {movies.map(movie =>(
            <div key={movie.imdbID} className='col-md-4 col-sm-12 box shadow d-flex justify-content-between my-4'>
              <div className='col-6'>
                <img src={movie.Poster} alt='' style={posterStyle} className='align-self-start'/>
              </div>
            </div>
        ))}
       
      </div>

    </div>
    </>
  )
}

export default Movies