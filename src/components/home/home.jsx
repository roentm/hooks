import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    let url = `https://cars-otdf.onrender.com/cars?perPage=99`
    // const resp =await fetch(url);
    // const data = await resp.json();
    // console.log(data)
    const { data } = await axios(url);
    console.log(data)
    setCars(data);
  }

  useEffect(() => {
    getCars()
  }, [])

  return (
    <div className='py-2'>

      <div className="row p-4">
        {cars.map((item, i) => (
          <div  className='p-2  col-12 col-md-4 col-lg-3 mt-5 mt-md-0 ' key={item._id}>
              <div  className='border shadow  h-100'>
                  <img src={item.img_url} width={'100%'} height={'190px'} alt="" />
                  <div className='text-center bg-dark text-light'>
                  <p style={{fontWeight:'bold'}} className='m-0'>{item.company} - {item.model}</p>
             
                  </div>
                 
              </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Home