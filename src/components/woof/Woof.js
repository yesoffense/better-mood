import React, { Component } from 'react';

class Woof extends Component {
  constructor(props) {
    super(props);

    this.state = {
      woofSrc: null, //not built in, own property
      isLoading: false // not built in, own property
    };
  }

  componentDidMount() { //built in function, component lifecycle. you only use mount one time, but you can re-render several times
    this.setState({ isLoading: true }); //setState = react function
    fetch('https://random.dog/woof.json') //fetch = returns a promise: "the data will arrive when i'm ready"
      .then(response => response.json()) //json-format, so it's possible to work with it in javascript
      .then(data => this.setState({ woofSrc: data.url, isLoading: false })); //then: re-rendering! removes loadingstate, since we loaded the data. => is an arrow-function.
    
    this.timer = setInterval(() => {
      fetch('https://random.dog/woof.json') //fetch = promise!
      .then(response => response.json()) //json-format
      .then(data => this.setState({ woofSrc: data.url })); //re-rendering
    }, 5000);
   
  }

  render() { //render === react function
    const { woofSrc, isLoading } = this.state; //this makes further coding easier, as we do not have to write 'this.' before woofSrc and isLoading anymore
    
    let extension = "";

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    
    if (woofSrc) {
    
      extension = woofSrc.split('.').pop(); 
      console.log(extension)
    }
    
    //video formats: webm, mp4
    if (extension === "mp4" || extension === "webm") {
      return(
        <div className="woof-box">
        <video width="500" height="500" controls autoPlay>
        <source src={woofSrc} type="video/mp4" />
        Your browser does not support the video tag.
      
        </video> 
        </div>
      )
    } else {
      return(
        <div className="woof">
          <img src={woofSrc} width="500px" height="500px" alt="" />

        </div>
      )
    }
  }
}

export default Woof;



