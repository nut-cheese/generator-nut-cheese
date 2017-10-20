import * as React from 'react';
import Button from '../../components/button';

class Prev extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="wrapper-page">
        <h2 className="page-title">This is Prev page</h2>
        <div>
          <Button disabled={true} style={{ marginRight: '5px' }}><a href="/">Prev</a></Button>
          <Button disabled={true} style={{ marginRight: '5px' }}>change background color!</Button>
          <Button><a href="/">Next</a></Button>
        </div>
      </div>
    )
  }
}

export default Prev;
