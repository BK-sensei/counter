import React from 'react';

class Counter extends React.Component {
    constructor(){
        super()
    }
    
    render(){
        return(
            <div>
                <h2>{this.props.count}</h2>
                <button className="btn btn-success" onClick={this.props.substract}>-</button>
                <button className="btn btn-danger" onClick={this.props.increment}>+</button>
            </div>
        )
    }
}

export default Counter