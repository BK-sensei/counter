import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  handlePlusClick = () => {
    this.setState ({ count: this.state.count + 1 })
  }

  handleMinusClick = () => {
    this.setState ({ count: this.state.count - 1 })
  }

  render() {
  
    return (
      <div className="p-4">
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button className="btn btn-success" onClick={this.handleMinusClick}>-</button>
        <button className="btn btn-danger" onClick={this.handlePlusClick}>+</button>
      </div>
    )
  }

}

export default App;
