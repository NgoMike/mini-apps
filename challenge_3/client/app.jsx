import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.winner = false;
    this.red = 1;
    this.black = 2;
    this.state = { 
      row1: [0,0,0,0], 
      row2: [0,0,0,0], 
      row3: [0,0,0,0], 
      row4: [0,0,0,0]
    };
    this.togglePiece.bind(this);
  }

  togglePiece(e) {
    e.preventDefault();
    this.setState(this.state.row1.push(1));
    // get value of spot clicked
    // match value with row/col location
    // change state of row/col
    // detect win or tie for: horizontal, vertical, diagonal and ties
    // display message
  }

  // diagonal: [ [ row1[0], row2[1], row3[2], row4[3] ] , [ row1[3], row2[2], row3[1], row4[0] ] ],
  // verticals: [ [ row1[0], row2[0], row3[0], row4[0] ], [ row1[1], row2[1], row3[1], row4[1] ], [ row1[2], row2[2], row3[2], row4[2] ], 
  // [ row1[3], row2[3], row3[3], row4[3] ] ]
  // horizontal: [ ]


  render() {
    return (
      <div className='grid-item' onClick={() => {this.togglePiece(e)}}></div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('board'));



export { App }






