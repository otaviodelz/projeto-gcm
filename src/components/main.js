import React, { Component } from 'react'
import PrimeiroPasso from '../PrimeiroPasso'
import SegundoPasso from '../SegundoPasso'
import TerceiroPasso from '../TerceiroPasso'
import QuartoPasso from '../QuartoPasso'
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

            nome: '',
    
            //step - 4
            envolvido: {
                nome: '',
                condicaoDaParte: '',
                conduzido: false,
                dataNascimento: '',
                pai: '',
                mae: '',
                nacionalidade: '',
                naturalidadeCidade: '',
                naturalidadeEstado: '',
                telefone: '',
                localDeTrabalho: '',
                versaoDoEnvolvido: '',
                rg: {
                    numeroRg: '',
                    orgaoExpedidor: '',
                    estado: ''
                },
                endereco: {
                    residencia: '',
                    numero: '',
                    bairro: '',
                    cidade: '',
                    estado: '',
                    complemento: ''
                }
            },
            
            dados: []
    
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
            local, bairro, envolvido
            } = this.state; 

        const values = { numeroDaOcorrencia, data, horaFato, numTalao, 
            viatura, horaIrradiacao, horaLocal, primeiroTermino,
            segundoTermino, kmIrradiacao, kmLocal, kmPrimeiroTermino,
            kmSegundoTermino, naturezaDaOcorrencia, codigoDaOcorrencia,
            local, bairro, envolvido};

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
                <QuartoPasso 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    values = {values}
                />
            )
        }

        if(step === 5) {
            return(
                <PassoFinal 
                    prevStep = {this.prevStep}
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
