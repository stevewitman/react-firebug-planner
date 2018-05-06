import React, { Component } from 'react';

import { connect } from 'react-firebase'

class Main extends Component {
  // componentDidMount() {
  //   this.props.setValue('hi from main')
  // }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(e.target.name.value, e.target.email.value);
    e.target.name.value = ''; 
    e.target.email.value = ''; 
  }
  render() {
    const { value } = this.props;
    return (
      <div>
        <p className="App">
            { value }
        </p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter Name" name="name" />
          <input type="text" placeholder="Enter Email" name="email" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const MapPropsToFirebase = (props, ref) => ({
  setValue: value => ref('helloWorld').set(value),
  addItem: (name, email) => ref('item').push({
    timeStamp: Date.now(),
    name: name,
    email: email,
    sent: false
  })
})

export default connect(MapPropsToFirebase)(Main);
