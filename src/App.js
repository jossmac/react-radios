import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { RadioGroup, Radio } from './radios';

const Container = props => (
  <div
    style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 600,
      padding: 30,
    }}
    {...props}
  />
);
const Label = props => <label style={{ padding: 8 }} {...props} />;

export default class App extends Component {
  state = { value: 'apple' };

  handleChange = value => {
    this.setState({ value: value });
  };

  render() {
    return (
      <Container>
        <h1>React Radios</h1>
        <RadioGroup
          name="fruit"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Label>
            <Radio value="apple" />Apple
          </Label>
          <Label>
            <Radio value="orange" />Orange
          </Label>
          <Label>
            <Radio value="watermelon" />Watermelon
          </Label>
        </RadioGroup>
      </Container>
    );
  }
}
