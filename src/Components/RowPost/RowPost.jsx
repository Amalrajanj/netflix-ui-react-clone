import React, { useEffect ,useState} from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants'
import './RowPost.css'
import YouTube from 'react-youtube'


function RowPost(props) {
    const [movies, setmovies] = useState([])
    const [urlId,setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((res)=>{
            setmovies(res.data.results)
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleMovie = (id)=>{
          axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
              if(res.data.results.lenght!==0){
                  setUrlId(res.data.results[0])
              }else{
                  console.log('trailer not found');
              }
          })
      }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                
                {movies.map((item,index)=>{
                    return <img onClick={()=>{handleMovie(item.id)}} className={props.isSmall ? 'smallPoster':'poster'} alt='poster' src={`${imageUrl}${item.backdrop_path}`} />
                })}
            </div>
            
            {urlId && <YouTube videoId={urlId.key} opts={opts}/>}
        </div>
    )
}

export default RowPost