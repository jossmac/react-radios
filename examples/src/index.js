import React, { Component } from 'react';
import { render } from 'react-dom';
import { RadioGroup, Radio } from '../../src';

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
const Anchor = props => (
  <a
    style={{ color: 'dodgerBlue', fontSize: '0.75em', marginLeft: '0.5em' }}
    {...props}
  />
);

// data
// ------------------------------

const groups = [
  {
    name: 'fruit',
    items: ['apple', 'orange', 'banana'],
  },
  {
    name: 'numbers',
    items: [1, 2, 3],
  },
];

// example
// ------------------------------

class App extends Component {
  state = { [groups[0].name]: groups[0].items[0] };

  handleChange = name => value => {
    this.setState({ [name]: value });
  };

  render() {
    console.log('state', this.state);
    return (
      <Container>
        <h1>
          🔘 React Radios
          <Anchor href="https://github.com/jossmac/react-radios">GitHub</Anchor>
        </h1>
        <p>
          Brings radio group behavior into line with other input types in React
          like the{' '}
          <a
            href="https://reactjs.org/docs/forms.html#the-select-tag"
            target="_blank"
          >
            select tag
          </a>.
        </p>
        {groups.map(g => (
          <RadioGroup
            component={Group}
            key={g.name}
            onChange={this.handleChange(g.name)}
            value={this.state[g.name]}
          >
            {g.items.map(i => (
              <Label key={i}>
                <Radio value={i} /> {i}
              </Label>
            ))}
          </RadioGroup>
        ))}
      </Container>
    );
  }
}

// render
// ------------------------------

render(<App />, document.getElementById('root'));
