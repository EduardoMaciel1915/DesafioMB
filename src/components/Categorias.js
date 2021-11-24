import React from 'react';
import '../styles/components/Categorias.css'

export default () => {
    return (
        <section className="categorias" id="categorias">

            <h1 className="heading">
                <span>c</span>
                <span>a</span>
                <span>t</span>
                <span>e</span>
                <span>g</span>
                <span>o</span>
                <span>r</span>
                <span>i</span>
                <span>a</span>
                <span>s</span>
            </h1>

            <div className="box-container">

                <div className="box">
                    <i className="fas fa-laptop-house"></i>
                    <h3>Eventos online</h3>
                    <p>Eventos digitais transmitidos de forma totalmente online!</p>
                </div>
                <div className="box">
                    <i className="fas fa-building"></i>
                    <h3>Eventos empresariais</h3>
                    <p>Eventos organizados por instituições empresariais.</p>
                </div>
                <div className="box">
                    <i className="fas fa-graduation-cap"></i>
                    <h3>Eventos acadêmicos</h3>
                    <p>Eventos organizados por instituições de ensino.</p>
                </div>

            </div>

    </section>

    )
}