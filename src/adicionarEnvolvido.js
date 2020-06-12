import React, { Component } from 'react'

export default class AdicionarEnvolvido extends Component {

    mostrar = e => {
        e.preventDefault();
        console.log(JSON.stringify(this.props.values.envolvido.nome))
    }

    render() {

        const { values, handleChange } = this.props;

        return(
            <div>
                <input 
                    name='nomeEnvolvido'
                    type='text'
                    onChange={handleChange('envolvido.nome')}
                    value={values.envolvido.nome}
                />
                <br />
                <button onClick={this.mostrar}>
                    Mostrar Dados
                </button>
            </div>
        )
    }
}