// @flow
import React, { Component, Fragment, type ElementRef } from 'react';
import { Container, Provider, Subscribe } from 'unstated';

type Value = string | number;

// Container
// ------------------------------

type State = { value: Value };

let instanceCounter = 0;
const parse = v => (isNaN(v) ? v : parseInt(v, 10));

export default class RadioContainer extends Container<State> {
  constructor(props) {
    super(props);

    this.consumerOnChange = props.onChange;
    this.name = props.name || `radio-group-${instanceCounter++}`;

    this.state = { value: props.value };
  }

  getName = () => {
    return this.name;
  };

  onChange = event => {
    const value = parse(event.target.value);

    this.setState({ value });

    if (this.consumerOnChange) this.consumerOnChange(value);
  };
}

// Group
// ------------------------------

function isFragment(c) {
  return c.toString() === 'Symbol(react.fragment)';
}

type RadioGroupProps = {
  children: Node,
  component: any,
  onChange: Value => void,
  name: string,
};

export class RadioGroup extends Component<RadioGroupProps> {
  container = new RadioContainer(this.props);
  static defaultProps = {
    component: Fragment,
  };
  render() {
    const { children, component: Tag, onChange, value, ...props } = this.props;
    const passProps = isFragment(Tag) ? {} : props;

    return (
      <Provider inject={[this.container]}>
        <Tag {...passProps}>{children}</Tag>
      </Provider>
    );
  }
}

// Radio
// ------------------------------

type RadioProps = { Component: any, innerRef?: ElementRef<*>, value: Value };

export class Radio extends Component<RadioProps> {
  static defaultProps = {
    component: 'input',
  };
  render() {
    const { component: Tag, innerRef, ...props } = this.props;

    return (
      <Subscribe to={[RadioContainer]}>
        {({ getName, onChange, state }) => {
          const checked = state.value === props.value;

          return (
            <Tag
              {...props}
              checked={checked}
              name={getName()}
              onChange={onChange}
              ref={innerRef}
              type="radio"
            />
          );
        }}
      </Subscribe>
    );
  }
}
