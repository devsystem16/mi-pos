import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { getCurrentDate, getCurrentHour } from '../Utils'

import Gastos from '../Gastos'



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


const Page = ({ guardarCierre, json_info }) => {
    const classes = useStyles();


    const [expense, setExpense] = useState([])

    const [totalCierre, setTotalCierre] = useState(0)
    const [totalVenta, setTotalVetnas] = useState(0)
    const [cierreDia, setValores] = useState(
        {
            date_close: getCurrentDate('-'),
            hour_close: getCurrentHour(),
            value_card: 0,
            value_cash: 0,
            value_close: 0,
            value_open: json_info.value,
            value_sales: 0,

            value_previous_close: 0,
            sales_transfer: 0,
            other_sales: 0
        }
    )

    const onChange = e => {
        setValores({ ...cierreDia, [e.target.name]: e.target.value })

        if (e.target.name === "value_cash") {
            setTotalVetnas(parseFloat(e.target.value) + parseFloat(cierreDia.value_card) + parseFloat(cierreDia.sales_transfer) + parseFloat(cierreDia.other_sales))
            setTotalCierre(parseFloat(e.target.value) + parseFloat(cierreDia.value_card) + parseFloat(cierreDia.sales_transfer) + parseFloat(cierreDia.other_sales))
        }

        if (e.target.name === "value_card") {
            setTotalVetnas(parseFloat(e.target.value) + parseFloat(cierreDia.value_cash) + parseFloat(cierreDia.sales_transfer) + parseFloat(cierreDia.other_sales))
            setTotalCierre(parseFloat(e.target.value) + parseFloat(cierreDia.value_cash) + parseFloat(cierreDia.sales_transfer) + parseFloat(cierreDia.other_sales))
        }
        if (e.target.name === "sales_transfer") {
            setTotalVetnas(parseFloat(e.target.value) + parseFloat(cierreDia.value_cash) + parseFloat(cierreDia.value_card) + parseFloat(cierreDia.other_sales))
            setTotalCierre(parseFloat(e.target.value) + parseFloat(cierreDia.value_cash) + parseFloat(cierreDia.value_card) + parseFloat(cierreDia.other_sales))
        }
        if (e.target.name === "other_sales") {
            setTotalVetnas(parseFloat(e.target.value) + parseFloat(cierreDia.value_cash) + parseFloat(cierreDia.value_card) + parseFloat(cierreDia.sales_transfer))
            setTotalCierre(parseFloat(e.target.value) + parseFloat(cierreDia.value_cash) + parseFloat(cierreDia.value_card) + parseFloat(cierreDia.sales_transfer))
        }

    }

    const guardarCierreCaja = (e) => {
        e.preventDefault()

        cierreDia.expenses = expense
        cierreDia.value_sales = totalVenta * 100
        cierreDia.sales_transfer = cierreDia.sales_transfer * 100
        cierreDia.other_sales = cierreDia.other_sales * 100
        cierreDia.value_card = cierreDia.value_card * 100
        cierreDia.value_cash = cierreDia.value_cash * 100
        cierreDia.value_close = totalCierre * 100
        guardarCierre(cierreDia)
    }

    const añadirGasto = (nuevo) => {
        setExpense([...expense, nuevo])
        setTotalCierre(parseFloat(totalCierre) - parseFloat(nuevo.value))
    }

    return (
        <>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    disabled
                    name="date_close"
                    id="standard-disabled"
                    label="Fecha (yyyy/mm/dd)"
                    defaultValue={getCurrentDate('-')}
                    className={classes.textField}
                    margin="normal"
                />

                <TextField
                    name="hour_close"
                    disabled
                    id="standard-disabled"
                    label="Hora (hh:mm)"
                    defaultValue={getCurrentHour()}
                    className={classes.textField}
                    margin="normal"

                />

                <TextField
                    name="value_cash"
                    id="standard-disabled"
                    label="Ventas en efectivo"
                    defaultValue="0"
                    value={cierreDia.value_cash}
                    className={classes.textField}
                    margin="normal"
                    onChange={onChange}
                />

                <TextField
                    name="value_card"
                    id="standard-disabled"
                    label="Ventas por tarjeta"
                    defaultValue="0"
                    value={cierreDia.value_card}
                    className={classes.textField}
                    margin="normal"
                    onChange={onChange}
                />


                <TextField
                    name="sales_transfer"
                    id="standard-disabled"
                    label="Ventas por transferencia"
                    defaultValue="0"
                    value={cierreDia.sales_transfer}
                    className={classes.textField}
                    margin="normal"
                    onChange={onChange}
                />

                <TextField
                    name="other_sales"
                    id="standard-disabled"
                    label="Ventas por otros métodos"
                    defaultValue="0"
                    value={cierreDia.other_sales}
                    className={classes.textField}
                    margin="normal"
                    onChange={onChange}
                />

            </form>

            <>
                <center><strong>Valor para cierre de caja</strong> </center>
                <form className={classes.container} noValidate autoComplete="off">


                    <TextField
                        disabled
                        name="value_sales"
                        id="standard-disabled"
                        label="Total en ventas"
                        defaultValue="$ 00.00"
                        value={totalVenta}
                        className={classes.textField}
                        margin="normal"
                        onChange={onChange}
                    />

                    <TextField
                        name="value_open"
                        disabled
                        id="standard-disabled"
                        label="Total apertura"
                        defaultValue={json_info.value / 100}
                        className={classes.textField}
                        margin="normal"
                        onChange={onChange}
                    />

                    <TextField
                        name="value_previous_close"
                        id="standard-disabled"
                        label="Propinas en efecto"
                        defaultValue="$ 00.00"
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
                        name="value_close"
                        id="standard-disabled"
                        label="Total de caja"
                        value={totalCierre}
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        onChange={onChange}
                    />

                </center>

                <Gastos añadirGasto={añadirGasto} />

                <center>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Corte en X</button>
                </center>

                <center>
                    <button onClick={guardarCierreCaja} type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar caja con $ {totalVenta}</button>
                </center>

            </>

        </>
    );
}

export default Page;