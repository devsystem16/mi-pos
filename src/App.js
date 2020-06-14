import React, { Component } from 'react';
import Swal from 'sweetalert2'


// SFC
import Header from './Components/Header'
import Apertura from './Components/Apertura'
import Cierre from './Components/Cierre'

//END 

import { API_BALANCE, API_ABRIR_DIA, API_CERRAR_DIA, API_BALANCE_OPEN } from './Components/Constantes'
import axios from 'axios';
import Default from './Components/Default'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDay: false,
      json_apertura: [],
      mostrarCierre: false,
      json_info: []
    }
  }


  componentDidMount() {

    axios.get(API_BALANCE).then(response => {
      this.setState({ json_apertura: response.data.results, openDay: true })
    
      if (this.state.json_apertura.value_open !== null) {
      
        axios.get(API_BALANCE_OPEN).then(respo => {
          this.setState({ json_info: respo.data[0] })
          this.setState({ mostrarCierre: true })
        })
    
      }




    })
  }

  guardarApertura = async (json) => {
    var datos = await axios.post(API_ABRIR_DIA, json);
    var respo = await axios.get(API_BALANCE_OPEN);

    
    this.setState({ json_info: respo.data[0] })
    this.setState({ json_apertura: datos.data, mostrarCierre: true })




    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Apertura de caja creado!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  guardarCierre = async (json) => {

 

    var datos = await axios.post(API_CERRAR_DIA, json);
    if (datos.status === 200) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Cierre finalizado correctamente.',
        showConfirmButton: false,
        timer: 1500
      })
    }



  }


  render() {
    return (

      <div className="container-fluid">

        <Header></Header>

        <div className="row">

          <div className="col">
            <Apertura finData={this.state.openDay} guardarApertura={this.guardarApertura} datos={this.state.json_apertura} bloquear={this.state.mostrarCierre } />
          </div>

          <div className="col">

            {this.state.mostrarCierre ?
              <Cierre datos={this.state.json_apertura} json_info={this.state.json_info} guardarCierre={this.guardarCierre} /> :
              <Default></Default>
            }


          </div>

        </div>

      </div>

    );
  }
}

export default App;
