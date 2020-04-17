import React from 'react';
import './App.css';
import {GraphType, GraphSection, Header, Footer} from './AppStyledComponents';

import LineChart from './Semiotic/ResponsiveLineChart';
import CurvyLineChart from './Semiotic/ResponsiveCurvyLineChart';
import AreaChart from './Semiotic/ResponsiveAreaChart';
import ScatterPlot from './Semiotic/ResponsiveScatterPlot';
import MiniMap from './Semiotic/MiniMap';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGraphType: 'LC'
    }

  }

  componentDidMount() {
  }
  
  updateSelectedGraphType (event) {

    let { value } = event.target;

    this.setState ({
      selectedGraphType: value
    });
  }

  renderGraph(graphType) {
    switch (graphType) {
      case 'LC': return <LineChart />;

      case 'CLC': return <CurvyLineChart />;

      case 'AC': return <AreaChart />;

      case 'SP': return <ScatterPlot />;

      case 'MM': return <MiniMap />;

      

      default: return <LineChart />;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header>
          <GraphType onChange={(e) => {this.updateSelectedGraphType(e)}}>
            <option value='LC'> Line Chart </option>
            <option value='CLC'> Curvy Line Chart </option>
            <option value='AC'> Area Chart </option>
            <option value='SP'> Scatter Plot </option>
            <option value='MM'> Mini Map </option>
            
          </GraphType>
          </Header>

          <GraphSection>
            { this.renderGraph(this.state.selectedGraphType) }
            </GraphSection>

          </header>
        <Footer>
          
        </Footer>
      </div>
    );
  
  }
  }

export default App;
