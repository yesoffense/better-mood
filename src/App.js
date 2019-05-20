import React, { Component } from 'react';
import './App.css';
import Woof from './components/woof/Woof';
import Minutes from './components/input_minutes/InputMinutes';
import Countdown from './components/countdown/Countdown';

//for design ideas: https://twitter.com/i/moments/994601867987619840

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedMinutes: null,      
    };

    this.selectMinutesBtn = this.selectMinutesBtn.bind(this); //binds context. i do not completely understand yet. read up.
    this.resetMinutes = this.resetMinutes.bind(this); 

  }

  //opdates state with selected minutes
  selectMinutesBtn(minutes) {
    this.setState({
      selectedMinutes: minutes
      //
    })
  }

  resetMinutes() {
    this.setState({ selectedMinutes: null });
  }

/* emojis: https://www.emojicopy.com/ */

  render() {
    const { selectedMinutes } = this.state;
    if (selectedMinutes === null) {
      
      return (
        <div className="App">
        <div class="grid">
          <div class="row">
            <div class="heading">

              <h1>better mood, instantly. 🐶</h1>
            </div>
          </div>
        </div>

        <div class="green-bg"></div>
        <div class="grid">
          <div class="row-paragraph">
            <div class="paragraph">

              <div class="h2-label">
                <h2>For anyone feeling blue, here's an immediate fix</h2>
              </div>
              <h3>Pictures of cutesy dogs! 🐕</h3>
              <h4>Select duration</h4>

              <div className="minute-btns">
              <Minutes time="60" label="1 minute" selectMinutesBtn={this.selectMinutesBtn}/> 
              <Minutes time="120" label="2 minutes" selectMinutesBtn={this.selectMinutesBtn}/> 
              <Minutes time="300" label="5 minutes" selectMinutesBtn={this.selectMinutesBtn}/> 
              <Minutes time="600" label="10 minutes" selectMinutesBtn={this.selectMinutesBtn}/> 
              <Minutes time="1200" label="20 minutes" selectMinutesBtn={this.selectMinutesBtn}/> 
            </div>

            </div>
          </div>
        </div>
        </div>
      );
    } else {
      return (
        <div className="Woof">
          <Countdown time={this.state.selectedMinutes} resetMinutes={this.resetMinutes}/>
          <Woof />
        </div>
      );
    } 
  }

}

export default App;
