import React, { Component } from 'react'
import PrimeiroPasso from '../PrimeiroPasso'
import SegundoPasso from '../SegundoPasso'
import TerceiroPasso from '../TerceiroPasso'
import PassoFinal from '../PassoFinal'

export default class Main extends Component {

    state = {
        step: 1,
        
        //step - 1
        numeroDaOcorrencia: '',
        data: '',
        horaFato: '',
        numTalao: '',
        viatura: '',
         
        //step - 2
        horaIrradiacao: '',
        horaLocal: '',
        primeiroTermino: '',
        segundoTermino: '',
        kmIrradiacao: '',
        kmLocal: '',
        kmPrimeiroTermino: '',
        kmSegundoTermino: '',

        //step - 3
        naturezaDaOcorrencia: '',
        codigoDaOcorrencia: '',
        local: '',
        bairro: '',

    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    nextStep = () => {
        const {step} = this.state;

        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const {step} = this.state;

        this.setState({
            step: step - 1
        })
    }

    showStep = () => {
        const {
            step, numeroDaOcorrencia, data, horaFato, numTalao, 
            viatura, horaIrradiacao, horaLocal, primeiroTermino,
            segundoTermino, kmIrradiacao, kmLocal, kmPrimeiroTermino,
            kmSegundoTermino, naturezaDaOcorrencia, codigoDaOcorrencia,
            local, bairro
            } = this.state; 

        const values = { numeroDaOcorrencia, data, horaFato, numTalao, 
            viatura, horaIrradiacao, horaLocal, primeiroTermino,
            segundoTermino, kmIrradiacao, kmLocal, kmPrimeiroTermino,
            kmSegundoTermino, naturezaDaOcorrencia, codigoDaOcorrencia,
            local, bairro };

        if(step === 1) {
            return(
                <PrimeiroPasso
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    values = {values}
                />
            )
        }

        if(step === 2) {
            return(
                <SegundoPasso
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                />
            )
        }

        if(step === 3) {
            return(
                <TerceiroPasso 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                />
            )
        }

        if(step === 4) {
            return(
                <PassoFinal 
                    prevStep = {this.prevStep}
                    handleSubmit = {this.handleSubmit}
                    values = {values}
                />
            )
        }
    }

    render(){
        const {step} = this.state;

        return(
            <div>
                <h1> Passo {step} de 6</h1>
                {this.showStep()}
            </div>   
        )
    }
}
