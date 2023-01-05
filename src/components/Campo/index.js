import './Campo.css'

const Campo = ({ type = 'text', aoAlterado, label, valor, obrigatorio, placeholder }) => {

    const aoDigitado = evento => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholder} />
        </div>
    )
}

export default Campo
