import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { apiURL } from '../../consts';
import PageCounter from './movies/pageCounter'
import YearPicker from './movies/yearPicker';


const Movies = () => {
  const [pages,setPages]=useState(0);
  const [movies,setMovies] = useState([]);
  const [querys,setQuerys]=useSearchParams();

  const pickYear=(_year) =>{
    setQuerys({year:_year, page:'1'});
  }
  const pickPage=(_page)=>{
    setQuerys({page:_page});
  }


  const doAPI= async (_searchQ) => {
    let data=[];
    try{
      const res=await axios.get(apiURL+'s='+_searchQ);
      data=await res.data;
      let results=await data.Search;
      let pageCount= Math.ceil(data.totalResults/10);
      setMovies(results);
      setPages(pageCount);
    }
    catch(err){
      console.log(err);
    }
  };

  useEffect(()=>{let searchQ=querys.get("s")||"bank";doAPI(searchQ)},[querys]);
    
  return (
    <>
    <PageCounter pages={pages} pickpage={pickPage}/>
    <YearPicker pickyear={pickYear} />
    </>
  )
}

export default Movies