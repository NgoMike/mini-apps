import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 1,
      frame: 1,
      frameResult: 0, 
      frameScore: 0,
      total: 0,
      message: ''
    };

    this.points = {
      onePoint: 1,
      twoPoints: 2,
      threePoints: 3,
      fourPoints: 4,
      fivePoints: 5,
      sixPoints: 6,
      sevenPoints: 7,
      eightPoints: 8,
      ninePoints: 9,
      tenPoints: 10
    }

    this.handleClick = this.handleClick.bind(this);
    this.updateFrame = this.updateFrame.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    var getPoints = e.target.className;
    let value = 0;
    for (var keys in this.points) {
      value = this.points[getPoints];
    }
    this.setState({ 
      frameResult: this.state.frameResult += value, 
      frameScore: this.state.frameScore += value,
      total: this.state.frameResult + this.state.frameScore, 
    });
  }

  updateFrame(e) {
    e.preventDefault();
    this.setState({ frame: this.state.frame++ });
  }

  updateTotal() {
    e.preventDefault();
    this.setState({ total: this.state.frameResult + this.state.frameScore });
  }

  updateMessage(e) {
    e.preventDefault();
    if (this.state.frameResult === 10) {
      this.setState({ message: this.state.message + 'Strike!'});
    }
  }

  render () {
    return (
      <div>
        <div className='CurrentFrame' onChange={this.updateFrame}>
          Current Frame: {this.state.frame}
        </div>

        <p>How Many Pins Do You Want To Hit?</p>
        <button className='onePoint' onClick={this.handleClick}>1</button>
        <button className='twoPoints' onClick={this.handleClick}>2</button>
        <button className='threePoints' onClick={this.handleClick}>3</button>
        <button className='fourPoints' onClick={this.handleClick}>4</button>
        <button className='fivePoints' onClick={this.handleClick}>5</button>
        <button className='sixPoints' onClick={this.handleClick}>6</button>
        <button className='sevenPoints' onClick={this.handleClick}>7</button>
        <button className='eightPoints' onClick={this.handleClick}>8</button>
        <button className='ninePoints' onClick={this.handleClick}>9</button>
        <button className='tenPoints' onClick={this.handleClick}>10</button>

        {/*Keeps track of points per turn, strikes, and spares */}
        <div className='FrameResult' onChange={this.handleClick}>
          Result: {this.state.frameResult}
        </div>

        {/*Keeps track of current frame score */}
        <div className='FrameScore'>
          Frame Score: {this.state.frameScore}
        </div>

        {/*Keeps track of total thus far */}
        <div className='RunningTotal'>
          Running Total: {this.state.total}
        </div>

        <div className='DisplayMessage' onChange={this.updateMessage}>

        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));