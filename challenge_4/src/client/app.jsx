import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 1,
      frame: 1,
      // frameResult: 0, 
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
    // this.updateFrame = this.updateFrame.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    // get className from buttons, then loop over this.points for value
    var getPoints = e.target.className;
    let value = 0;
    for (var keys in this.points) {
      // save value in a variable to use for if statements below
      value = this.points[getPoints];
    }
    // sets limit to 10 pts max
    if (this.state.frameScore >= 10) {
        // resets to 0 if greater than 10
        this.setState({ frameScore: this.state.frameScore = 0 });
      } else {
        // if less than 10, add the points 
        this.setState({ frameScore: this.state.frameScore += value });
      }
    // increment frames up to 10 max
    if (this.state.frame < 10) {
      // increment turns
      if (this.state.turn < 2) {
        this.setState({ turn: this.state.turn += 1 });
      } else {
        this.setState({ turn: this.state.turn -= 1 });
      }
      // 2 turns before increment frame
      if (this.state.turn === 2) {
        this.setState({ frame: this.state.frame += 1 });
      }
    } else {
      alert('Game Over!');
    }
    // keep tracks of running total
    this.setState({ 
      total: this.state.total + this.state.frameScore, 
    });
  }
  // suppose to render message if strike...
  updateMessage() {
    e.preventDefault();
    if (this.state.frameScore === 10 && this.state.turn === 1) {
      this.setState({ message: this.state.message += 'Strike!'});
    }
  }

  render () {
    return (
      <div>
        <div className='CurrentFrame'>
          Current Frame: {this.state.frame}
        </div>

        <div>Turn: {this.state.turn}</div>

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

        {/*Keeps track of points per turn, strikes, and spares 
        <div className='FrameResult' onChange={this.handleClick}>
          Result: {this.state.frameResult}
        </div> */}

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