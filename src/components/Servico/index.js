import Serie from '../Serie'
import './Servico.css'

const Servico = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    return (
        (props.series.length > 0) ? <section className='servico' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='series'>
                {props.series.map( serie => <Serie corDeFundo={props.corPrimaria} key={serie.nome} nome={serie.nome} imagem={serie.imagem} /> )}
            </div>
        </section>
        : ''
    )
}

export default Servico