import React, { Component } from 'react';
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

export default class App extends Component {
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
            name={g.name}
            value={this.state[g.name]}
            onChange={this.handleChange(g.name)}
          >
            {g.items.map(i => (
              <Label>
                <Radio value={i} /> {i}
              </Label>
            ))}
          </RadioGroup>
        ))}
      </Container>
    );
  }
}
