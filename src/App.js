import React from 'react';
import Counter from './Components/Counter';

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
        <Counter count={this.state.count} substract={this.handleMinusClick} increment={this.handlePlusClick}/>
      </div>
    )
  }

}

export default App;
