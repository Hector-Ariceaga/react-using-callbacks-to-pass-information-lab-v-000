import React, { Component } from 'react';

export default class ColorSelector extends Component {

  handleClick = () => (
<<<<<<< HEAD

=======
    
>>>>>>> 8bd6474aa06813a9b8e44545ca990a075e7404da
  )
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" onClick={setColor} style={{backgroundColor: str}}/>
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
