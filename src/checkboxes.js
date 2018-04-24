// @flow
import React, { Component, Fragment, type ElementRef } from 'react';
import { Container, Provider, Subscribe } from 'unstated';

type Value = Array<string | number>;

// Container
// ------------------------------

type State = { value: Value };

let instanceCounter = 0;
const parse = v => (isNaN(v) ? v : parseInt(v, 10));

class CheckboxContainer extends Container<State> {
  constructor(props) {
    super(props);

    this.consumerOnChange = props.onChange;
    this.name = props.name || `checkbox-group-${instanceCounter++}`;

    this.state = { value: props.value };
  }

  getName = () => {
    return this.name;
  };

  onChange = event => {
    let value = this.state.value.slice(0);
    const val = parse(event.target.value);

    if (this.state.value.includes(val)) {
      value = this.state.value.filter(c => c !== val);
    } else {
      value.push(val);
    }

    this.setState({ value });

    if (this.consumerOnChange) this.consumerOnChange(value);
  };
}

// Group
// ------------------------------

function isFragment(c) {
  return c.toString() === 'Symbol(react.fragment)';
}

type CheckboxGroupProps = {
  children: Node,
  component: any,
  onChange: Value => void,
  name: string,
};

export class CheckboxGroup extends Component<CheckboxGroupProps> {
  container = new CheckboxContainer(this.props);
  static defaultProps = {
    component: Fragment,
    value: [],
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

// Checkbox
// ------------------------------

type CheckboxProps = { Component: any, innerRef?: ElementRef<*>, value: Value };

export class Checkbox extends Component<CheckboxProps> {
  static defaultProps = {
    component: 'input',
  };
  render() {
    const { component: Tag, innerRef, ...props } = this.props;

    return (
      <Subscribe to={[CheckboxContainer]}>
        {({ getName, onChange, state }) => {
          const checked = state.value.includes(props.value);

          return (
            <Tag
              {...props}
              checked={checked}
              name={getName()}
              onChange={onChange}
              ref={innerRef}
              type="checkbox"
            />
          );
        }}
      </Subscribe>
    );
  }
}
