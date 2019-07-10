import React, { Component } from 'react';
import * as Actions from '../actions/Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';



class GeneratePassword extends Component{
    constructor(props){
        super(props);

        this.state = {
            generated: false,
            password: ''
        }
    }
    // ---------------------FUNCTION---------------------//
    generate = ()=>{
        const char = `1234567890-=~!@#$%^&*()_+qwertyuiop[]asdfghjkl;'zxcvbnm,./QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>?`;
        let pass = '';
        for(let i=0; i<12; i++){
            let index = Math.floor(Math.random()*char.length);
            pass += char[index];
        }
        

        this.setState({
            generated: true,
            password: pass
        })
    }
    // ---------------------RENDER---------------------//
    render(){
        return(
            <div className="pages" data-theme={this.props.state.default.darkMode ? "dark" : "light"}>
                <Header />
                <div className="post-detail" data-theme={this.props.state.default.darkMode ? "dark" : "light"}>
                    <h1>Generate Password</h1>
                    <div className="generate-password">
                        <div className="input-bar">
                            <input ref="amountInput" value={this.state.password} className={this.state.generated ? 'input' : 'input collapsed'} disabled></input>
                            <div className={!this.state.generated ? 'button' :  'button extend' } onClick={()=>{this.generate()}}>Generate</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(state => ({
    state: state
  }),
    (dispatch) => ({
      actions: bindActionCreators(Actions, dispatch)
    })
  )(GeneratePassword);
  