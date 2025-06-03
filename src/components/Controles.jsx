const Controles = ({ onCambiarUnidad, onCambiarClima, onResetAll }) => {
    return (
        <div className='controles-clima'>
            <button onClick={onCambiarUnidad}>Cambiar Unidad</button>
            <button onClick={() => onCambiarClima('Soleado')}>Soleado</button>
            <button onClick={() => onCambiarClima('Nublado')}>Nublado</button>
            <button onClick={() => onResetAll()}>Reset</button>
        </div>
    )
}

export default Controles