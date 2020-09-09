import React, { useRef, useEffect } from 'react';
import api from '../../../services/api'
import './style.css'
import PageDefault from '../../../components/PageDefault';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export default function RegisterSeason() {
  const history = useHistory()

  const season_numberRef = useRef('')
  const linkRef = useRef('')
  const colorRef = useRef('')

  const [seasons, setSeasons] = useState([])


  useEffect(() => {
    api.get('/register/season').then(response => {
      setSeasons(response.data)
    })
  }, [])

  console.log(seasons)


  async function handleSubmit(e) {
    e.preventDefault()

    const season_number = season_numberRef.current.value
    const link = linkRef.current.value
    const color = colorRef.current.value

    const data = {
      season_number,
      link,
      color
    }

    try {
      await api.post('/register/season', data)
      history.push('/session')
    } catch (err) {
      alert('houve algum problema para cadastrar essa temporada')
    }




  }

  return (
    <PageDefault linkPath='/session' nameLink='Voltar para Home'>
      <div className="register-container">
        <h2 className='register-title'>Cadastre uma nova temporada:</h2>
        <form onSubmit={handleSubmit} className='register-form'>
          <div className="input-float-container">
            <input ref={season_numberRef} className='input-float' type="text" name="season" id="season" pattern='.+' required />
            <label className='label-float' htmlFor="season">Numero da temporada</label>
          </div>

          <div className="input-float-container">
            <input ref={linkRef} className='input-float' type="text" name="link" id="link" pattern='.+' required />
            <label className='label-float' htmlFor="link">Link</label>
          </div>

          <div className="input-color-container">
            <label className='label-color' htmlFor="color">Cor</label>
            <input ref={colorRef} className='input-color' type='color' name='color' id='color' />
          </div>

          <div className="button-form-container">
            <button className='button-form-register' type='submit'>
              Cadastrar
          </button>
          </div>


        </form>

        <h1 className='title-list-season'>Temporadas já cadastradas:</h1>

        <ul>
          {seasons.map(season => (
            <li className='list-item'>{`${season.season_number}-temporada`}</li>
          ))}

        </ul>

      </div>
    </PageDefault>

  )
}