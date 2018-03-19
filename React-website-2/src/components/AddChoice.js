import React from 'react';

class AddChoice extends React.Component
{
    constructor()
    {
        super();
        this.state = {NewChoice: ''};//Default State
    }

    render()
    {
        return(
            <div>
                New Choice: <input type="text" value={this.state.newChoice} onChange={this.changeName}/>
                <button onClick={this.addChoice}>Add</button>
            </div>
        );
    }

    changeName = (event) => {
        this.setState({newChoice: event.target.value});//New State
    }

    addChoice = () => {
        this.props.addChoice(this.state.newChoice);
        this.setState({newChoice: 0});//Reset the input
    }
}

export default AddChoice;