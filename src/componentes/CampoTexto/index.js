import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` //usando interpolacao de string

    console.log(props)

    function aoDigitado(event) {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
                </label>
            <input
                placeholder={placeholderModificada}
                required={props.obrigatorio}
                onChange={aoDigitado}
                value={props.valor}
            ></input>
        </div>
    )
}

export default CampoTexto