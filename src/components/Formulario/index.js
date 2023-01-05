import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import { v4 as uuidv4 } from 'uuid';
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [servico, setServico] = useState('')
    const [nomeServico, setNomeServico] = useState('')
    const [corServico, setCorServico] = useState("#000000")

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCadastrarSerie({
            id: uuidv4(),
            nome: nome, 
            imagem: imagem, 
            servico: servico
        })
        setNome('')
        setImagem('')
        setServico('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para cadastrar uma nova série</h2>
                <Campo 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome da série" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Servico"
                    itens={props.servicos}
                    valor={servico}
                    aoAlterado={valor => setServico(valor)}
                />
                <Botao>
                    Adicionar Série
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarServico({ nome: nomeServico, cor: corServico })
            }}>
                <h2>Preencha os dados para cadastrar um novo serviço</h2>
                <Campo 
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do serviço" 
                    valor={nomeServico}
                    aoAlterado={valor => setNomeServico(valor)}
                />
                <Campo 
                    obrigatorio
                    type="color"
                    label="Cor" 
                    placeholder="Digite a cor do serviço" 
                    valor={corServico}
                    aoAlterado={valor => setCorServico(valor)}
                />
                <Botao>
                    Adicionar Serviço
                </Botao>
            </form>
        </section>
    )
}

export default Formulario