import React from 'react';
import '../styles/components/Eventos.css'

export default () => {
    return (
        <section className="eventos" id="eventos">

            <h1 className="titulos">EVENTOS</h1>

            <div className="box-container">

                <div className="box">
                    <img src="https://assets.bileto.sympla.com.br/eventmanager/production/6c5lmac6mg3f31vmmbu4jf005pm679ttuko81p0g8vohhm2v38catq6k8atj0vqj0eu1k87mpvqvjlreruv76001dcmf2q9hdpbj5h.webp"/>
                    <div className="content">
                        <h3> instituto inhotim 2021 </h3>
                        <p>Brumadinho, MG</p>

                        <div className="price"> R$50.00 <span>R$130.00</span> </div>
                        <a href="#" className="btn">Comprar Ingressos</a>
                    </div>
                </div>

                <div className="box">
                    <img src="https://ticket-com.vercel.app/images/2.jpg" alt=""/>
                    <div className="content">
                        <h3> DevOps Experience </h3>
                        <p>São Paulo, SP</p>

                        <div className="price"> R$2000.00 <span>R$500.00</span> </div>
                        <a href="#" className="btn">Comprar Ingressos</a>
                    </div>
                </div>

                <div className="box">
                    <img src="https://assets.bileto.sympla.com.br/eventmanager/production/2pri4bs62iu325nkla2d2sofh2u0sf2up2cr28p244hapkngi1hggpt34h7v1h5cjdsctajp6lilnbkaj59v2uqumt35a5m6nsbvs9m.webp" alt=""/>
                    <div className="content">
                        <h3> Museu da Língua Portuguesa </h3>
                        <p>São Paulo, SP</p>
                        <div className="price"> R$30.00 <span>$90.00</span> </div>
                        <a href="#" className="btn">Comprar Ingressos</a>
                        </div>
                </div>

                <div className="box">
                    <img src="https://ticket-com.vercel.app/images/4.jpg"/>
                    <div className="content">
                        <h3> Maratona da comunicação digital </h3>
                        <p>Evento online</p>
                        <div className="price"> R$80.00 <span>R$120.00</span> </div>
                        <a href="#" className="btn">Comprar Ingressos</a>
                    </div>
                </div>

                <div className="box">
                    <img src="https://ticket-com.vercel.app/images/5.jpg" alt=""/>
                    <div className="content">
                        <h3> Encontro de direito digital </h3>
                        <p>Evento online</p>
                        <div className="price"> R$90.00 <span>R$150.00</span> </div>
                        <a href="#" className="btn">Comprar Ingressos</a>
                    </div>
                </div>

                <div className="box">
                    <img src="https://assets.bileto.sympla.com.br/eventmanager/production/l0tlen54uf0b7c1vtkg4mql2dd9t1balnnvkvdhqovquh6hbq3q6as1gk456sekqoto03lu4nojehkclt1djj3f71l9cdagl88bl3i.webp" alt=""/>
                    <div className="content">
                        <h3> Arena MRV - Realidade Virtual </h3>
                        <p>Evento online</p>
                        <div className="price"> R$10.00 <span>$50.00</span> </div>
                        <a href="#" className="btn">Comprar Ingressos</a>
                    </div>
                </div>

            </div>

        </section>

    )
}