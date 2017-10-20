import * as React from 'react';
import Button from '../../components/button';

import style from './index.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: 'rgb(255,255,255)',
    }
  }

  changeBackgroundColor() {
    const color = `rgb(${this.genRandomNumber(255)}, ${this.genRandomNumber(255)}, ${this.genRandomNumber(255)})`;
    this.setState({
      backgroundColor: color,
    });
  }

  genRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  render() {
    const { backgroundColor } = this.state;

    return (
      <div className="wrapper-page" style={{ backgroundColor }}>
        <h2 className="page-title">This is home page</h2>
        <div>
          <Button style={{ marginRight: '5px' }}><a href="/prev">Prev</a></Button>
          <Button onClick={this.changeBackgroundColor.bind(this)} style={{ marginRight: '5px' }}>change background color!</Button>
          <Button><a href="/next">Next</a></Button>
        </div>
      </div>
    )
  }
}

export default Home;
