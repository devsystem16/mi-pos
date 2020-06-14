import React from 'react';
import Page from './Page'

const Apertura = ({ datos , guardarApertura , finData,bloquear}) => {
 
 return  (finData === false  ) ? null : <Page datos={datos} guardarApertura ={guardarApertura} bloquear={bloquear}/>
}

export default Apertura;