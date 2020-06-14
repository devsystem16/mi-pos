import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

const Gastos = ({ añadirGasto }) => {

    const [gasto, setValue] = useState({ name: '', value: '' })

    const onChange = e => {
        setValue({ ...gasto, [e.target.name]: e.target.value })
    }
    const añadir = () => {
        añadirGasto(gasto)
        setValue({ name: '', value: '' })
    }

    return (
        <>
            <center>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Agregar Gasto
                </button>
            </center>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Nuevo Gasto</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <TextField
                                name="name"
                                id="standard-disabled"
                                label="Descripción"
                                value={gasto.name}
                                margin="normal"
                                onChange={onChange}
                            />   <TextField
                                name="value"
                                id="standard-disabled"
                                value={gasto.value}
                                label="$ Valor"
                                margin="normal"
                                onChange={onChange}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="button" onClick={añadir} className="btn btn-primary" data-dismiss="modal">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gastos;
