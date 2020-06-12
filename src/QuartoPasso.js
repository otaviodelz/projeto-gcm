import React, { Component } from 'react'
import AdicionarEnvolvido from './adicionarEnvolvido';

export default class TerceiroPasso extends Component {

    state = {
        dadosEnvolvido: []
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    continue = e => {
        e.preventDefault()
        this.props.nextStep();
    }

    salvar = e => {
        e.preventDefault()

        this.setState({
            dadosEnvolvido: [...this.state.dadosEnvolvido, this.props.values]
        })

        console.log(JSON.stringify(this.state.dadosEnvolvido))
    }

    adicionarEnvolvido = () => {

        const {values, handleChange} = this.props

            return(
                <AdicionarEnvolvido
                    handleChange = {handleChange}
                    values = {values}
                />
            )
    }

    render() {

        return(
            <div>
                {this.adicionarEnvolvido()}
                <button onClick={this.salvar}>
                    Salvar
                </button>
                <br/>
                <button onClick={this.back}>
                    Voltar
                </button>
                <button onClick={this.continue}>
                    Próximo
                </button>
            </div>
        )
    }
}