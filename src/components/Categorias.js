import React from 'react';
import '../styles/components/Categorias.css'

export default () => {
    return (
        <section className="categorias" id="categorias">

            <h1 className="titulos">CATEGORIAS</h1>

            <div className="categorias-items">

                <div className="item">
                    <i className="fas fa-laptop-house"></i>
                    <h3>Eventos online</h3>
                    <p>Eventos digitais transmitidos de forma totalmente online!</p>
                </div>
                <div className="item">
                    <i className="fas fa-building"></i>
                    <h3>Eventos empresariais</h3>
                    <p>Eventos organizados por instituições empresariais.</p>
                </div>
                <div className="item">
                    <i className="fas fa-graduation-cap"></i>
                    <h3>Eventos acadêmicos</h3>
                    <p>Eventos organizados por instituições de ensino.</p>
                </div>
            </div>
    </section>
    )
}