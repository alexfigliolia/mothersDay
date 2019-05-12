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
      'linear-gradient(to bottom, #FC4958, #FC2A29)',
      'linear-gradient(to bottom, #ed213a, #FC0967)',
      'linear-gradient(to top, #eb3349, #f45c43)', 
      'linear-gradient(to top, #d31027, #ea384d)',
    ];
  }

  componentDidMount() {
    this.pw = new PageSwitch('switcher',{
      duration:600,
      direction:0,
      start:0,
      loop:false,
      ease:'ease',
      transition:'flip3d',
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

  shouldComponentUpdate(nextProps, { activeIndex }) {
    return activeIndex !== this.state.activeIndex;
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <div className="App" style={{height: window.innerHeight}}>
        <div id='switcher'>
          <Slide2 
            color={this.colors[1]}
            activeIndex={activeIndex}
            index={0} />
          <Slide1 
            text1='Happy'
            text2="Mother's Day!"
            color={this.colors[0]}
            activeIndex={activeIndex}
            index={1}
            classes={activeIndex === 1 ? 'slide1 slide1-show' : 'slide1'} />
          <Slide3 
            color={this.colors[3]}
            activeIndex={activeIndex}
            index={2}
            classes={activeIndex === 2 ? 'slide3 slide3-show' : 'slide3'} />
          <Slide1 
            text1='Alex'
            text2=''
            color={this.colors[2]}
            activeIndex={activeIndex}
            index={3}
            classes={activeIndex === 3 ? 'slide1 slide-end slide1-show' : 'slide1 slide-end'} />
        </div>
      </div>
    );
  }
}
