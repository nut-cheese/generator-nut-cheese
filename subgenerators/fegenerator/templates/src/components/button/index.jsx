import * as React from 'react';

import style from './index.scss';

class Button extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const { type, disabled } = this.props;

    return (
      <button
        style={this.props.style ? this.props.style : {}}
        onClick={this.props.onClick ? this.props.onClick.bind(this): () => {}}
        className={`${style['demo-button']} ${type === 'dash' ? style['dash'] : ''} ${disabled ? style['disabled'] : ''}`}
      >{this.props.children}</button>
    )
  }
}

export default Button;