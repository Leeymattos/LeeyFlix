import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import api from '../../services/api'


import { FaPlayCircle } from 'react-icons/fa'
import PageDefault from '../../components/PageDefault'
import BannerMain from '../../components/BannerMain'
import './style.css'




export default function Session() {
  const [videosFirst, setVideosFirst] = useState([])
  const [seasons, setSeasons] = useState([])

  let videos = []
  useEffect(() => {
    api.get('/register/video').then(response => {
      setVideosFirst(response.data)
    })
    api.get('/register/season').then(response => {
      setSeasons(response.data)
    })
  }, [])


  function getYoutubeId(url) {
    if (url.length === 28) {
      const id = url.substring(17)
      return id
    } else if (url.length > 43) {
      const idFirstPart = url.substring(32)
      const id = idFirstPart.substring(0, 11)
      return id
    } else {
      const id = url.substring(32)
      return id
    }
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
  }
  return (
    <PageDefault linkPath='/register/video' nameLink='Novo Video'>
      <div className="session-banner-container">
        <BannerMain />
      </div>

      <div className="session-container">

        {seasons.map(season => (
          <div className="videos-container">

            <h3 className='season-title'
              style={{ backgroundColor: `${season.color}` }}>
              {`${season.season_number}-temporada`}
            </h3>

           {/*Limpando o array*/}
            {videos.forEach(video=>{
              videos.shift()
              if(videos.length === 1){
                videos.pop()
              }
            })}


            {videosFirst.forEach(video => {
              if (video.season_id === season.id) {
                videos.push(video)
              }
            })}
            <div className="video-card-group-container">
              <ul className='container-carousel'>
                <Slider {...settings}>


                  {videos.map(video => {
                    return (
                      <li key={video.id} className='slider-item'>
                        <Link className='link-video' to={`/streamer/${video.title}/${getYoutubeId(video.url)}`}>
                          <div className="thumb" style={{ backgroundImage: `url(https://img.youtube.com/vi/${getYoutubeId(video.url)}/mqdefault.jpg)` }}> <FaPlayCircle className='watch-button' /></div>
                        </Link>
                      </li>
                    )
                  })}
                </Slider>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </PageDefault>
  )
}