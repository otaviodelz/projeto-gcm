import React, { Component } from 'react'

export default class TerceiroPasso extends Component {
    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    continue = e => {
        e.preventDefault()
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return(
            <div>
                <input
                    name='naturezaDaOcorrencia'
                    type='text'
                    onChange={handleChange('naturezaDaOcorrencia')}
                    placeholder='Natureza da Ocorrência'
                    value={values.naturezaDaOcorrencia}
                />
                <br />
                <input
                    name='codigoDaOcorrencia'
                    type='text'
                    onChange={handleChange('codigoDaOcorrencia')}
                    placeholder='Código'
                    value={values.codigoDaOcorrencia}
                />
                <br />
                <input
                    name='local'
                    type='text'
                    onChange={handleChange('local')}
                    placeholder='Local'
                    value={values.local}
                />
                <br />
                <input
                    name='bairro'
                    type='text'
                    onChange={handleChange('bairro')}
                    placeholder='Bairro'
                    value={values.bairro}
                />
                <br />
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