import React,{useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
            console.log(res.data);
            setMovie(res.data.results[0])
        })
    },[])
    return (
        <div  
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.name : 'loading'}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner