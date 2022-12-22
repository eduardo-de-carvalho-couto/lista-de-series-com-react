import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const series = [
        'Netflix',
        'Prime Video',
        'HBO Max',
        'Showtime'
    ]

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para cadastrar uma nova série</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Serie" itens={series}/>
                <Botao>
                    Adicionar Série
                </Botao>
            </form>
        </section>
    )
}

export default Formulario