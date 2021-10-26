import React from 'react';
import Counter from './Components/Counter';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count1: 0,
      count2: 0
    }
  }

  // Fonctions pour les boutons +
  handlePlusClick = (counter) => {
    if (counter === "count1"){                              // Le compteur 1 ne ne montera jamais au dessus de 100
      if (this.state.count1 < 100)
      this.setState ({ count1: this.state.count1 + 1 })
      if (this.state.count1 === this.state.count2)         // Quand on incrémente le compteur 1 et qu’il a la même valeur que le compteur 2, le compteur 2 s’incrémente aussi
      this.setState ({count2: this.state.count2 + 1})
    } else if (counter === "count2"){                      // Le compteur 2 ne ne montera jamais au dessus de 100
      if (this.state.count2 < 100)
      this.setState ({ count2: this.state.count2 + 1 })
    }  
  }

  // Fonction pour les boutons -
  handleMinusClick = (counter) => {                           // Le compteur 1 ne descendra jamais en dessous de 0
    if (counter === "count1"){
      if (this.state.count1 > 0)                              
      this.setState ({ count1: this.state.count1 - 1 })
    } else if (counter === "count2"){                         // Le compteur 2 ne descendra jamais en dessous de 0
      if (this.state.count2 > 0)
      this.setState ({ count2: this.state.count2 - 1 })
      if (this.state.count2 === this.state.count1)            // Quand on décrémente le compteur 2 et qu’il a la même valeur que le compteur 1, le compteur 1 se décrémente aussi
      this.setState ({count1: this.state.count1 -1})
    }
  }

  render() {
  
    return (
      <div className="card border border-dark border-4 rounded shadow m-3 p-2">
        <h1 className="text-center rounded text-white bg-dark p-2">Counter</h1>
        <Counter count={this.state.count1} choice="count1" substract={this.handleMinusClick} increment={this.handlePlusClick}/>
        <Counter count={this.state.count2} choice="count2" substract={this.handleMinusClick} increment={this.handlePlusClick}/>
      </div>
    )
  }

}

export default App;

