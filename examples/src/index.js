import React, { Component } from 'react';
import { render } from 'react-dom';
import { Checkbox, CheckboxGroup, RadioGroup, Radio } from '../../src';

// styled components
// ------------------------------

const Container = props => (
  <div
    style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 400,
      padding: 30,
    }}
    {...props}
  />
);
const Group = props => <div style={{ margin: `8px -8px` }} {...props} />;
const Label = props => <label style={{ padding: 8 }} {...props} />;
const Line = () => (
  <hr style={{ background: '#ddd', border: 0, height: 1, margin: '2em 0' }} />
);
const Pre = props => (
  <pre
    style={{
      background: '#f6f6f6',
      borderRadius: 4,
      color: '#444',
      fontFamily: 'Monaco, monospace',
      fontSize: 12,
      lineHeight: 1.5,
      maxWidth: '100%',
      padding: 8,
      overflowX: 'auto',
    }}
    {...props}
  />
);
const Anchor = props => (
  <a
    style={{ color: 'dodgerBlue', fontSize: '0.75em', marginLeft: '0.5em' }}
    {...props}
  />
);

// data
// ------------------------------

const items = ['apple', 'orange', 'banana'];

// example
// ------------------------------

class App extends Component {
  state = { radio: items[0], checkbox: items.slice(0, 2) };

  handleChange = name => value => {
    this.setState({ [name]: value });
  };

  render() {
    console.group('state');
    console.log(`radios: "${this.state.radio}"`);
    console.log('checkboxes:', this.state.checkbox);
    console.groupEnd('state');

    return (
      <Container>
        <h1>
          🔘 React Radios
          <Anchor href="https://github.com/jossmac/react-radios">GitHub</Anchor>
        </h1>
        <p>
          Brings radio group behavior into-line with other input types in React
          like{' '}
          <a
            href="https://reactjs.org/docs/forms.html#the-select-tag"
            target="_blank"
          >
            the select tag
          </a>.
        </p>
        <RadioGroup
          component={Group}
          onChange={this.handleChange('radio')}
          value={this.state.radio}
        >
          {items.map(i => (
            <Label key={i}>
              <Radio value={i} /> {i}
            </Label>
          ))}
        </RadioGroup>
        <Pre>{`<RadioGroup value="apple" onChange={this.handleChange}>
  <Radio value="apple" /> Apple
  <Radio value="orange" /> Orange
  <Radio value="banana" /> Banana
</RadioGroup>`}</Pre>
        <Line />
        <p>
          If you'd like to use the same single-onchange/value pattern for
          checkboxes, there's components for that too:
        </p>
        <CheckboxGroup
          component={Group}
          onChange={this.handleChange('checkbox')}
          value={this.state.checkbox}
        >
          {items.map(i => (
            <Label key={i}>
              <Checkbox value={i} /> {i}
            </Label>
          ))}
        </CheckboxGroup>
        <Pre
        >{`<CheckboxGroup value={['apple', 'orange']} onChange={this.handleChange}>
  <Checkbox value="apple" /> Apple
  <Checkbox value="orange" /> Orange
  <Checkbox value="banana" /> Banana
</CheckboxGroup>`}</Pre>
        <Line />
        <p>View state changes in the console.</p>
      </Container>
    );
  }
}

// render
// ------------------------------

render(<App />, document.getElementById('root'));
