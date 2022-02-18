import React, {Component} from 'react'
import './App.css'

export default class Calc extends Component{
  state = {
    n1: null,
    n2: null,
    result: "O resultado aparecerá aqui",
    sinal: ""
  }

  add = () => {
    let {n1, n2} = this.state
    if(n1 && n2 !== null){
      this.setState({
        result: n1 + n2,
        sinal: "+"
      })
    } else{
      this.setState({
        result: "Você precisa digitar os dois números!"
      })
    }
  }

  remove = () => {
    let {n1, n2} = this.state
    if(n1 && n2 !== null){
      this.setState({
        result: n1 - n2,
        sinal: "-"
      })
    } else{
      this.setState({
        result: "Você precisa digitar os dois números!"
      })
    }
  }

  divide = () => {
    let {n1, n2} = this.state
    if(n1 && n2 !== null){
      this.setState({
        result: n1 / n2,
        sinal: "/"
      })
    } else{
      this.setState({
        result: "Você precisa digitar os dois números!"
      })
    }
  }

  multiply = () => {
    let {n1, n2} = this.state
    if(n1 && n2 !== null){
      this.setState({
        result: n1 * n2,
        sinal: "*"
      })
    } else{
      this.setState({
        result: "Você precisa digitar os dois números!"
      })
    }
  }

  clear = () => {
    let {n1, n2} = this.state
    if(n1 && n2 !== ""){
      this.setState({
        n1:0,
        n2:0,
        result: "Você limpou os resultados",
        sinal: ""
      })
    }else{
      this.setState({
        result: "Nenhum valor foi digitado"
      })
    }
  }

  handleChange = (e) => {
    let {n1, n2} = this.state
    this.setState({
      n1: Number(e.target.value)
    })
  }

  handleChange2 = (e) => {
    let {n1, n2} = this.state
    this.setState({
      n2: Number(e.target.value)
    })
  }

  render(){
    let {add, remove, divide, multiply, clear, handleChange, handleChange2} = this
    let {n1, n2, result, sinal} = this.state
    return(
      <div className='box'>
        <h1>React Calc App</h1>
        <h2>{result}</h2>
        <div className='inputs'>
          <input onChange={handleChange} type="number" value={n1}/>
          <h2>{sinal}</h2>
          <input onChange={handleChange2} type="number" value={n2}/>
        </div>
        <div className='buttons'>
          <button onClick={add}> + </button>
          <button onClick={remove}> - </button>
          <button onClick={divide}> / </button>
          <button onClick={multiply}> * </button>
          <button onClick={clear}>Clear</button>          
        </div>
      </div>
    )
  }
}