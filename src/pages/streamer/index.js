import React from 'react';
import PageDefault from '../../components/PageDefault';

import './style.css'

export default function Streamer(props){
  const YoutubeId = props.match.params.youtubeId
  const title = props.match.params.title
  return(
   <PageDefault linkPath='/session' nameLink='Voltar para lista'>
     <h2 className='title'>{title}</h2>
     <div className="streamer-container">
      
     <iframe 
      className='video-streamer'
      title='Video Title'
      src={`https://www.youtube.com/embed/${YoutubeId}?autoplay=0`}
      frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen></iframe>
    
     </div>
     
     
   </PageDefault> 
  )
}