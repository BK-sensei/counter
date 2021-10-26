import React from 'react';

class Counter extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-outline-success m-4 rounded-circle" onClick={this.props.substract}>-</button>
                <h2>{this.props.count}</h2>
                <button className="btn btn-outline-danger m-4 rounded-circle" onClick={this.props.increment}>+</button>
            </div>
        )
    }
}

export default Counter