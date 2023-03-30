import React, { useEffect, useState } from 'react';
import SingleData from '../singleData/SingleData';

const Card = ({props}) => {
    const [data,setData]=useState([]);
    const [showAll,setShowAll]=useState(false)

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res => res.json())
            .then(data =>{
                // console.log(data.data.tools)
                setData(data.data.tools);
            });
            
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12'>
            {
                data.slice(0,showAll?12:6).map((singleData)=>(<SingleData singleData={singleData} kye={singleData.id}></SingleData>))
            }
        </div>
    );
};

export default Card;