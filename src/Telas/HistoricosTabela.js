import React from 'react';
import Head  from '../Componentes/Util/Head';
import TituloPagina from '../Componentes/TituloPagina';

const Históricos = () => {
    return (
        <>
            <Head
                title="Históricos"
                description="Tenha acesso a tudo que foi registrado em tal."
            />

            <section className="animarEntradaSessao">
                <TituloPagina>Históricos</TituloPagina>
            </section>
        </>
    );
};

export default Históricos;
