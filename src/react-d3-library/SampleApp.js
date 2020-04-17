import React from 'react';
import logo from './logo.svg';
import './App.css';
import rd3 from 'react-d3-library';

const RD3Component = rd3.Component;
var LineChart = rd3.LineChart;

var AreaChart = rd3.createAreachart;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: ''}
  }

  componentDidMount() {
    var data = {};

  data.width = 500;
  data.height = 750;

data.dataset = [
    {xValue : 1, yValue: 40},
    {xValue : 2, yValue: 63}, 
    {xValue : 3, yValue: 52}, 
    {xValue : 4, yValue: 59}, 
    {xValue : 5, yValue: 79}
  ]

  data.x_display_name = 'X VALUE';
  data.y_display_name = 'Y VALUE';

    this.setState({
      data
  
    });
  }

  render() {

    console.log('this.state ', this.state)

    const node = <AreaChart data = {this.state.data}/>;
    console.log('node  ', node);

    return (

      this.state.data &&

      <div className="App">
          <RD3Component data={node} />
      </div>
    );
  
  }
  }

export default App;
