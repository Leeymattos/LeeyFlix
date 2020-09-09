import React, {useRef, useState} from 'react';

import './style.css'
import PageDefault from '../../../components/PageDefault';
import { useEffect } from 'react';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';


export default function RegisterVideo() {
  const [seasons, setSeasons] = useState([])

  const titleRef = useRef('')
  const urlRef = useRef('')
  const season_idRef = useRef('')

  const history = useHistory()

  useEffect(()=>{
    api.get('/register/season').then(response=>{
      setSeasons(response.data)
    })
  },[])

  async function handleSubmit(e){
    e.preventDefault()

    const title = titleRef.current.value
    const url =  urlRef.current.value
    const season_id = season_idRef.current.value

    const data = {
      title,
      url,
      season_id
    }
    try {
      await api.post('/register/video', data)
      history.push('/session')
    } catch (err) {
      alert('houve algum problema para cadastrar esse vídeo')
    }
  }


  return (
    <PageDefault linkPath='/register/season' nameLink='Nova Temporada'>
      <div className="register-container">
        <h2 className='register-title'>Cadastre um novo episódio:</h2>
        <form onSubmit={handleSubmit} className='register-form'>
          <div className="input-float-container">
            <input ref={titleRef} className='input-float' type="text" name="title" id="title" pattern='.+' required />
            <label className='label-float' htmlFor="title">Título</label>
          </div>

          <div className="input-float-container">
            <input ref={urlRef} className='input-float' type="text" name="url" id="url" pattern='.+' required />
            <label className='label-float' htmlFor="url">Url</label>
          </div>

          <div className="select-container">
            <select ref={season_idRef} className='select-season' name="season" id="season">
              <option value="0">Selecione uma temporada</option>
              {seasons.map(season=>(
                <option value={season.season_number}>{`${season.season_number}-Temporada`}</option>
              ))}
            </select>
          </div>

          

          <div className="button-form-container">
            <button className='button-form-register' type='submit'>
              Cadastrar
          </button>
          </div>


        </form>
      </div>
    </PageDefault>

  )
}