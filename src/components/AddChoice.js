import React from 'react';
import './AddChoice.css';
import Text from 'simple-react-form-material-ui/lib/text'

class AddChoice extends React.Component{
    constructor(){
        super();
        this.state={
            newChoice: ''
        };
    }
    render(){
        return(
            <div>
              Add New Color: <input className="AddChoice-input"  type={Text}  placeholder="Color name" value = {this.state.newChoice} onChange={this.onNewChoice}/>
              <button className="AddChoice-button" onClick={this.onAddChoice}>Add Choice</button>  
            </div>
        );
    }
    onNewChoice=(e)=>{
        const newChoiceValue=e.target.value;
        this.setState({newChoice: newChoiceValue})
    }

    onAddChoice=()=>{
        this.props.onAddChoice(this.state.newChoice);
        //this.props.store.setState('newChoice');
        this.setState({newChoice:''})

    }
}

export{
    AddChoice
};