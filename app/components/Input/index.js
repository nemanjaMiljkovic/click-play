import React, { PureComponent } from 'react';
import StyledInput from './Input';


export default class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }
  state = {
    song: '',
  }
  onInputChange(e) {
    this.setState({
      song: e.target.value,
    });
  }
  render() {
    return (
      <StyledInput type="text" value={this.state.song} className="form-control" placeholder="Unesite naziv pesme" onChange={this.onInputChange} />
    );
  }
}
