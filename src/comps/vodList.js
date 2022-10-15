import React from 'react'
import VodItem from './vodItem'

export default function VodList() {
  return (
    <div className='container-fluid vodList py-5'>
        <div className='container'>
            <h2>List of Movies:</h2>
            <div className='row'>
                <VodItem/>
                <VodItem/>
                <VodItem/>
                <VodItem/>
                <VodItem/>
                <VodItem/>
                <VodItem/>
                <VodItem/>
                <VodItem/>
                <VodItem/>
                <VodItem/>
                <VodItem/>
            </div>
        </div>
    </div>
  )
}
