import React, { Component } from 'react';
import PageSwitch from 'pageswitch';
import Slide1 from './components/Slide1/Slide1';
import Slide2 from './components/Slide2/Slide2';
import Slide3 from './components/Slide3/Slide3';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    }
    this.pw = null;
    this.colors = [
      'linear-gradient(to bottom, #56ccf2, #2f80ed)',
      'linear-gradient(to top, #2193b0, #6dd5ed)',
      'linear-gradient(to bottom, #00d2ff, #3a7bd5)', 
      'linear-gradient(to top, #1e3c72, #2a5298)',
    ];
  }

  componentDidMount() {
    this.pw = new PageSwitch('switcher',{
      duration:600,
      direction:1,
      start:0,
      loop:false,
      ease:'ease',
      transition:'slide',
      freeze:false,
      mouse:true,
      mousewheel:true,
      arrowkey:true,
      autoplay:false,
    });
    this.pw.on('before', (index, prev) => {
    });
    this.pw.on('after', index => {
      this.setState({ activeIndex: index });
    });
    setTimeout(() => {
      this.setState({ activeIndex: 0 });
    }, 1000);
  }

  render() {
    return (
      <div className="App" style={{height: window.innerHeight}}>
        <div id='switcher'>
          <Slide2 
            color={this.colors[1]}
            activeIndex={this.state.activeIndex}
            index={0} />
          <Slide1 
            text1='Happy'
            text2='Birthday'
            color={this.colors[0]}
            activeIndex={this.state.activeIndex}
            index={1}
            classes={this.state.activeIndex === 1 ? 'slide1 slide1-show' : 'slide1'} />
          <Slide3 
            color={this.colors[3]}
            activeIndex={this.state.activeIndex}
            index={2}
            classes={this.state.activeIndex === 2 ? 'slide3 slide3-show' : 'slide3'} />
          <Slide1 
            text1='Alex'
            text2=''
            color={this.colors[2]}
            activeIndex={this.state.activeIndex}
            index={3}
            classes={this.state.activeIndex === 3 ? 'slide1 slide-end slide1-show' : 'slide1 slide-end'} />
        </div>
      </div>
    );
  }
}
