import React from 'react';
import './style.css'

export default function BannerMain() {
  return (
    <>
      <section className='banner'
        style={{ backgroundImage: `url(https://img.youtube.com/vi/3B_qXITddHU/maxresdefault.jpg)`}}>

        <div className="content-container">

          <div className="session-description">
            <h1>Eu, a patroa e as Crianças - S01E01 - Piloto</h1>
            <p>Primeiro eps</p>
          </div>
          
          <button className='watch-button2'>Assistir</button>

          <div className="session-video">
            <iframe width="560" height="315"
              className='video'
              title='session-video'
              src="https://www.youtube.com/embed/3B_qXITddHU" frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>

      </section>
    </>
  )
}