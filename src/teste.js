import React, { Component } from 'react'
import {get} from './services/ocorrencia'

export default class Teste extends Component {
    constructor(props){
        super(props)

        this.state = {
            ocorrencia: {}
        }

        this.testeGet = this.testeGet.bind(this)
    }

    testeGet() {
        get((ocorrencia) => {
    
            this.setState({
                ocorrencia: ocorrencia
            })
        })

        console.log(this.state.ocorrencia)
    }

    render(){
        return(
            <div>
                <h1>Teste Get - IndexedDB</h1>

                <h3>{this.state.ocorrencia.numeroDaOcorrencia}</h3>
                <button onClick={this.testeGet}>Get</button>
            </div>
        )
    }
}

