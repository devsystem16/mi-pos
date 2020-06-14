import React from 'react';
import Page from './Page'
import Default from '../Default'
const Apertura = ({ datos,guardarCierre ,json_info}) => {

 
        return  (datos.value_open === null  ) ? <Default /> :  <Page  guardarCierre={guardarCierre} json_info={json_info} />
}

export default Apertura;