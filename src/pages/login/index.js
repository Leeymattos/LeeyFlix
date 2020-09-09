import React,{useRef} from 'react';
import {Link} from 'react-router-dom'
import {FiArrowRight} from 'react-icons/fi'
import {useHistory} from 'react-router-dom'

import LiBackground from '../../components/LiBackground'
import logo from '../../assets/leeyflix.png'
import './style.css'
import api from '../../services/api';

export default function Login() {
  const emailRef = useRef('')
  const passwordRef = useRef('')

  const history = useHistory()

  async function handleSubmit(e){
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    const data = {
      email,
      password
    }

    try {
      await api.post('login/user', data)
      history.push('/session')
    } catch (err) {
      alert('houve algum erro')
    }
  }

  return (
    <>
      <div className="login-container">

        <form onSubmit={handleSubmit} className='login-form'>
          <div className="login-title">
            <img src={logo} alt="logo" className='login-logo' />
            <h3>Faça já o seu login:</h3>
          </div>
          <div className="input-float-container">
            <input ref={emailRef} className='input-float' type="text" name='email' id='email' pattern='.+' required />
            <label className='label-float' htmlFor="email">E-email</label>
          </div>

          <div className="input-float-container">
            <input ref={passwordRef} className='input-float' type="password" name='password' id='password' pattern='.+' required />
            <label className='label-float' htmlFor="password">Senha</label>
          </div>


          <div className="button-form-container">
            <button className='button-form'>
              Entrar
        </button>
          </div>

          <Link to='/register/user' className='login-link'><FiArrowRight color='red'/> Não tenho cadastro!</Link>

        </form>

        <LiBackground/>
        
      </div>

    </>
  )
}