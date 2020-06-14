import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { getCurrentDate, getCurrentHour , conversionMoneda} from '../Utils'


const useStyles = makeStyles((theme) => ({

    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,

    },

    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));




const Page = ({ datos, guardarApertura,bloquear }) => {
    const classes = useStyles();

    var valor_apertura = conversionMoneda(datos.value_open)  
    var valor_apertura_anterior = conversionMoneda(datos.value_previous_close)  

    const [inicioDia, setValores] = useState(
        {
            date_open: getCurrentDate('-'),
            hour_open: getCurrentHour(),
            value_previous_close: valor_apertura_anterior,
            value_open: valor_apertura,
            observation: datos.observation
        }
    )


    const onChange = e => {
        setValores({ ...inicioDia, [e.target.name]: e.target.value })
    }


    const guardarAperturaCaja = (e) => {

        e.preventDefault()
        inicioDia.value_previous_close = inicioDia.value_previous_close * 100
        inicioDia.value_open = inicioDia.value_open * 100

        guardarApertura(inicioDia);

    }
   
    return (
        <>
            <form className={classes.container} noValidate autoComplete="off" onSubmit={guardarAperturaCaja}>
                <TextField
                    disabled
                    name="date_open"
                    id="standard-disabled"
                    label="Fecha (yyyy/mm/dd)"
                    defaultValue={inicioDia.date_open}
                    className={classes.textField}
                    margin="normal"



                />

                <TextField
                    name="hour_open"
                    disabled
                    id="standard-disabled"
                    label="Hora (hh:mm)"
                    defaultValue={inicioDia.hour_open}
                    className={classes.textField}
                    margin="normal"
                />

                <TextField
                    name="value_previous_close"
                    id="standard-disabled"
                    label="Total Anterior"
                    disabled={bloquear}
                    defaultValue={inicioDia.value_previous_close}
                    className={classes.textField}
                    margin="normal"
                    onChange={onChange}
                />

                <TextField
                    name="value_open"
                    id="standard-disabled"
                    label="Total Inicial"
                    disabled={bloquear}
                    defaultValue={inicioDia.value_open}
                    className={classes.textField}
                    margin="normal"
                    onChange={onChange}
                />



                <label>Observaciones</label>
                <textarea className="form-control rounded-0"
                    id="observation"
                    name="observation"
                    disabled={bloquear}
                    rows="2"
                    defaultValue={inicioDia.observation}
                    onChange={onChange}
                />

                <Button  disabled={bloquear} type="submit" variant="contained" color="primary" value="data" className={classes.button}>
                    Enviar
            </Button>
            </form>


        </>
    );
}

export default Page;