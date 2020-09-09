import React,{useRef} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import LiBackground from '../../../components/LiBackground'
import './style.css'
import logo from '../../../assets/leeyflix.png'
import api from '../../../services/api'

export default function RegisterUser() {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const passwordConfirmationRef = useRef('')

  const history = useHistory()

  async function handleSubmit(e){
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value
    const passwordConfirmation = passwordConfirmationRef.current.value

    const data = {
      email,
      password,
      passwordConfirmation
    }

    try {
      await api.post('register/user', data)
      history.push('/')
      alert('Cadastrado com sucesso!')
      
    } catch (err) {
      alert('Houve algum erro!')
    }

  }
  return (
    <div className="register-user-container">
      <form onSubmit={handleSubmit} className='register-user-form'>
        <div className="register-user-title">
          <img className='register-user-logo' src={logo} alt="logo" />
          <h3>Faça já o seu cadastro:</h3>
        </div>

        <div className="input-float-container">
          <input ref={emailRef} className='input-float' type="text" name="email" id="email" pattern='.+' required />
          <label className='label-float' htmlFor="email">E-mail</label>
        </div>
        <div className="input-float-container">
          <input ref={passwordRef} className='input-float' type="password" name="password" id="password" pattern='.+' required />
          <label className='label-float' htmlFor="password">Senha</label>
        </div>
        <div className="input-float-container">
          <input ref={passwordConfirmationRef} className='input-float' type="password" name="passwordConfirmation" id="passwordConfirmation" pattern='.+' required />
          <label className='label-float' htmlFor="passwordConfirmation">Confirme sua senha</label>
        </div>

        <div className="button-form-container">
          <button className='button-form' type='submit'>
            Cadastrar
          </button>
        </div>

        <Link to='/' className='register-user-link'><FiArrowLeft color='red'/>
        Já sou cadastrado!</Link>

      </form>

      <LiBackground/>
    </div>
  )
}