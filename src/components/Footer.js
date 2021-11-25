import React from 'react';
import '../styles/components/Footer.css';

export default () => {
    return (
            <section className="footer">

                <div className="container">
            
                    <div className="item">
                        <h3>Sobre</h3>
                        <p>Site de compra e gestão de eventos presenciais ou online de empresas e instituições acadẽmicas.</p>
                    </div>
                    <div className="item">
                        <h3>Localização</h3>
                        <a href="https://pt.wikipedia.org/wiki/Brasil">Brasil</a>
            
                    </div>
                    <div className="item">
                        <h3>Menu</h3>
                        <a href="#home">Home</a>
                        <a href="#eventos">Eventos</a>
                        <a href="#categorias">Categorias</a>
                    </div>
                    <div className="item">
                        <h3>Siga-nos</h3>
                        <a href="https://www.facebook.com/profile.php?id=100003817660175">facebook</a>
                        <a href="https://www.instagram.com/executandu/">instagram</a>
                        <a href="https://github.com/EduardoMaciel1915">github</a>
                        <a href="https://www.linkedin.com/in/eduardo-maciel-845926197/">linkedin</a>
                    </div>
            
                </div>
            
                <h1 className="credit"> Criado por Eduardo Maciel </h1>
        
        </section> 
    )
}