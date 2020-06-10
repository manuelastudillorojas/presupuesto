import React, { useState }from "react";
import PropTypes from 'prop-types';
import Error from  './Error'
import shortid from 'shortid'


const Formulario = ({guardarGasto,guardarCrearGasto}) =>{

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError]= useState(false);
    // cuando el usuario guarde los gastos
    const agregarGasto = e =>{
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim()===''){
            guardarError(true);
            return;
        }
        guardarError(false)
        // contruir el gasto
        const gasto={
            nombre,
            cantidad,
            id: shortid.generate()

        }
     
        // pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);
        // resetar el form 
        guardarNombre('');

        guardarCantidad(0);
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>
                { error ? <Error mensaje="Ambos Campos son obligarotios o presupuesto incorrecto"/> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />

            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 3.000"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar Gasto"
            
                />
            </div>
        </form>
    );
}


Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired

}


export default Formulario;