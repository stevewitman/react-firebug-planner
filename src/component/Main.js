import React, { Component } from 'react';

import { connect } from 'react-firebase'

class Main extends Component {
  componentDidMount() {
    this.props.setValue('hi from main')
  }
  render() {
    const { value } = this.props;
    return (
      <div className="App">
          [Main Component]
          { value }
      </div>
    );
  }
}

const MapPropsToFirebase = (props, ref) => ({
  value: 'helloWorld',
  setValue: value => ref('helloWorld').set(value)
})

export default connect(MapPropsToFirebase)(Main );
