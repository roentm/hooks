import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { apiURL } from '../../consts';
import Movie from './movies/Movie';
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
  const prevPage=()=>{
    const cPage= Number(querys.get("page"));
    if(cPage!==1){pickPage(cPage-1)}
  }
  const nextPage=()=>{
    const cPage= Number(querys.get("page"));
    if(cPage<pages){pickPage(cPage+1)}
  }
  const searchInput=(_input)=>{if(_input.length<3){return}else{setQuerys({s:_input,page:'1'})}}
  const resetSearch=()=>{setQuerys()};


  const doAPI= useCallback(async (_searchQ) => {
   
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
  },[querys])

  useEffect(()=>{
    const searchQ=querys.get("s")||"bank";
    doAPI(searchQ)},[querys,doAPI]);
    
  return (
    <>
    <SearchBar searchInput={searchInput} resetSearch={resetSearch}/>
    <div className='container d-flex my-3 flex-wrap'>
      <div className='col-9 col-sm-12'>
        <YearPicker pickYear={pickYear} />
      </div>
      <div className='col-3 col-sm-12'>
        <PageCounter pages={pages} pickPage={pickPage}/>
      </div>
      
    </div>
    <div className='container position-relative'>
      {loading?<img src='/imgs/loadingsh.webp' alt='loading' className='w-50 h-50 bottom-50 end-50'/>:
      <div className='row'>

        
        {movies?.map(movie => (<Movie movie={movie}/>))}
        {!movies && <p>No results found</p>}
       
      </div>}

    </div>
    {(querys.get("page")>1) &&
    <button className='btn btn-dark position-absolute top-50 start-0 fs-1 text-light ms-4 btnHover d-none d-sm-none d-md-block' onClick={prevPage} title='To Previous Page'>❰</button>}
    {(querys.get("page")<pages)&&
    <button className='btn btn-dark position-absolute top-50 end-0 fs-1 text-light me-4 btnHover d-none d-sm-none d-md-block' onClick={nextPage} title='To Next Page'>❱</button>}

    
    </>
  )
}

export default Movies