import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Serie.css'

const Serie = ({ id, favorito, nome, imagem, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (<div className='serie'>
        <AiFillCloseCircle 
            size={25} 
            className='deletar' 
            onClick={() => aoDeletar(id)} />
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <div className='favoritar'>
                {favorito 
                    ? <AiFillHeart {...propsFavorito} color='#ff0000' /> 
                    : <AiOutlineHeart {...propsFavorito} />
                }
            </div>
        </div>
    </div>)
}

export default Serie