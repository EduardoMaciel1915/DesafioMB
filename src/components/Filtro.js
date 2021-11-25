import React from 'react';
import '../styles/components/Filtro.css';

export default () => {
    return (
            <section className="filter" id="filter">

                <h1 className="titulos">FILTRO</h1>
            
                <div className="linhas">
            
                    <div className="image">
                        <img src="https://images.sympla.com.br/6052047fec82e.svg" alt=""/>
                    </div>
            
                    <form>
                        <div className="inputBox">
                            <h3>Cidade/ Estado</h3>
                            <input type="text" placeholder="Digite o endereço que deseja"/>
                        </div>
            
                        <div className="inputBox">
                            <h3>Quando</h3>
                            <input type="date"/>
                        </div>
                        
                        <div className="inputBox">
                            <h3>Tipo</h3>
                            <input type="text" placeholder="Online, Empresarial ou Acadêmico?"/>
                        </div>
                        
                        <input type="submit" className="btn" value="Buscar"/>
                    </form>
            
                </div>
        
        </section>
    )
}