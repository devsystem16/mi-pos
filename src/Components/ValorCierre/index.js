import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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


const ValorCierre = () => {
    const classes = useStyles();


    return (
        <>
            <center><strong>Valor para cierre de caja</strong> </center>
            <form className={classes.container} noValidate autoComplete="off">


                <TextField
                    disabled
                    name="date_open"
                    id="standard-disabled"
                    label="Total en ventas"
                    defaultValue="$ 00.00"
                    className={classes.textField}
                    margin="normal"
                />

                <TextField
                    name="hour_open"
                    disabled
                    id="standard-disabled"
                    label="Total apertura"
                    defaultValue="12:42"
                    className={classes.textField}
                    margin="normal"
                />

                <TextField
                    name="value_previous_close"
                    id="standard-disabled"
                    label="Propinas en efecto"
                    defaultValue="$926.71"
                    className={classes.textField}
                    margin="normal"
                />

                <TextField
                    name="value_open"
                    id="standard-disabled"
                    label="Propinas en tarjeta"
                    defaultValue="$ 0"
                    className={classes.textField}
                    margin="normal"
                />

            </form>

            <center>
                <TextField
                    name="value_previous_close"
                    id="standard-disabled"
                    label="Total de caja"
                    defaultValue="$926.71"
                    className={classes.textField}
                    margin="normal"
                />

            </center>
        </>
    );
}

export default ValorCierre;