import React, { Component } from 'react';
import { render } from 'react-dom';
import { RadioGroup, Radio } from '../../src';

// styled components
// ------------------------------

const Container = props => (
  <div
    style={{
      fontFamily: 'sans-serif',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 600,
      padding: 30,
    }}
    {...props}
  />
);
const Label = props => <label style={{ padding: 8 }} {...props} />;

// data
// ------------------------------

const groups = [
  {
    name: 'fruit',
    items: ['apple', 'orange', 'watermelon'],
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
    const qualifiedValue = isNaN(value) ? value : parseInt(value);
    this.setState({ [name]: qualifiedValue });
  };

  render() {
    return (
      <Container>
        <h1>React Radios</h1>
        {groups.map(g => (
          <RadioGroup
            key={g.name}
            name={g.name}
            value={this.state[g.name]}
            onChange={this.handleChange(g.name)}
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
