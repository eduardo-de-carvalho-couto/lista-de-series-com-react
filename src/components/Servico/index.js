import Serie from '../Serie'
import './Servico.css'
import hexToRgba from 'hex-to-rgba';

const Servico = (props) => {

    const css = { backgroundColor: hexToRgba(props.cor, '0.2') }
    return (
        (props.series.length > 0) ? <section className='servico' style={css}>
            <input type='color' className='input-cor' value={props.cor} onChange={evento => {
                props.mudarCor(evento.target.value, props.id);
            }} />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='series'>
                {props.series.map( serie => {
                    return (
                        <Serie 
                            corDeFundo={props.cor} 
                            key={serie.nome} 
                            id={serie.id} 
                            nome={serie.nome} 
                            imagem={serie.imagem} 
                            aoDeletar={props.aoDeletar} 
                            favorito={serie.favorito}
                            aoFavoritar={props.aoFavoritar}
                        />
                    );
                })}
            </div>
        </section>
        : ''
    )
}

export default Servico