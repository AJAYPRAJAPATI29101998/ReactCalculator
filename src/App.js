import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
 
 constructor(props){
   super(props)
   this.state={
     result:''
   }
this.handleClick=this.handleClick.bind(this);
this.c=this.c.bind(this);
this.clearAll=this.clearAll.bind(this);
this.finalResult=this.finalResult.bind(this);
 }

  handleClick(e){
    
    this.setState({
  
      result:  this.state.result+(e.target.name)
    
    })  ;
    
 }

 c(){
       
            this.setState({
              result: this.state.result.slice(0,this.state.result.length-1)
            })
        
 }

 clearAll(){
   this.setState({
     result:''
   })
 }

 finalResult(){
try{
  this.setState({
    result: eval(this.state.result).toString()
  })}
  catch(error){
   this.setState({
     result:"Error"
   })
  }
  
 }

  render() {
    console.log(this.state.result)
    console.log(this.state.result[this.state.result.length-1])
    return (
      <div>
         <div className="App">
  <input type='text' value={this.state.result} style={{height: '50px',
    width: '292px'}}/>
     <div className='buttons'>
       <button onClick={this.clearAll}>Clear</button>
       <button onClick={this.c}>C</button>
       <button name='+' onClick={this.handleClick} >+</button>
       <button name='-' onClick={this.handleClick}>-</button>
       <button name='*' onClick={this.handleClick}>*</button>
       <button name='/' onClick={this.handleClick}>/</button>
       <button name='1' onClick={this.handleClick}>1</button>
       <button name='2' onClick={this.handleClick}>2</button>
       <button name='3' onClick={this.handleClick}>3</button>
       <button name='4' onClick={this.handleClick}>4</button>
       <button name='5' onClick={this.handleClick}>5</button>
       <button name='6' onClick={this.handleClick}>6</button>
       <button name='7' onClick={this.handleClick}>7</button>
       <button name='8' onClick={this.handleClick}>8</button>
       <button name='9' onClick={this.handleClick}>9</button>
       <button name='0' onClick={this.handleClick}>0</button>
       <button name='Result' onClick={this.finalResult}>Result</button>
     </div>
    </div>
      </div>
    )
  }
}





