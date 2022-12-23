import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const servicos = [
        'Netflix',
        'Prime Video',
        'HBO Max',
        'Showtime'
    ]

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [servico, setServico] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCadastrarSerie({
            nome: nome, 
            imagem: imagem, 
            servico: servico
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para cadastrar uma nova série</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Servico" 
                    itens={servicos}
                    valor={servico}
                    aoAlterado={valor => setServico(valor)}
                />
                <Botao>
                    Adicionar Série
                </Botao>
            </form>
        </section>
    )
}

export default Formulario