import React from 'react';

export default class test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '我是子組件'
    };
  }
  render() {
    return (
      <h1>{this.state.text}</h1>
		);
  }
}
