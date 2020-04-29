import React, { useState }from "react";
import Error from  './Error'



const Formulario = () =>{

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

        // contruir el gasto
        

        // pasar 
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

export default Formulario;