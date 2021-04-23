import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import '../styles/pages/landing.css'

import logoImg from '../images/Logo.svg'

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Imagem Logo Happy" />

        <main>
          <h1>Encontre aqui a loja que você precisa!</h1>
          <p>Não sabe se em sua cidade há a loja que precisa? <br /> Sem problemas, a gente te ajuda!</p>
        </main>

        <div className="location">
          <strong>Piraju</strong>
          <span>São Paulo</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={36} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  )
}

export default Landing