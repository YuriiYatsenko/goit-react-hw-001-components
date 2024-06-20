// src/components/Modal/Clock.js
import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

    useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div className="clock">{time.toLocaleTimeString()}</div>;
};

export default Clock;

// import React, { Component } from 'react';

// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: new Date().toLocaleTimeString()
//     };
//   }

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       this.setState({
//         time: new Date().toLocaleTimeString()
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   render() {
//     return <div className="Clock">{this.state.time}</div>;
//   }
// }

// export default Clock;


