# React Radios

Brings radio group behavior into line with other input types in React like the [select tag](https://reactjs.org/docs/forms.html#the-select-tag).

[https://jossmac.github.io/react-radios](https://jossmac.github.io/react-radios)

### Install

```bash
yarn add react-radios
```

### Use

```js
import { Radio, RadioGroup } from 'react-radios';

<RadioGroup value={this.state.fruit} onChange={this.handleChange}>
  <Radio value="apple" /> Apple
  <Radio value="orange" /> Orange
  <Radio value="banana" /> Banana
</RadioGroup>
```

If you'd like to use the same single-value pattern for checkboxes,
there's components for that too:

```js
import { Checkbox, CheckboxGroup } from 'react-radios';

<CheckboxGroup value={this.state.numbers} onChange={this.handleChange}>
  <Checkbox value={1} /> One
  <Checkbox value={2} /> Two
  <Checkbox value={3} /> Three
</CheckboxGroup>
```

### Props

#### RadioGroup / CheckboxGroup

| Property        | Description                      |
| --------------- | -------------------------------- |
| children `Node` | Required. Radios or Checkboxes. |
| component `$ReactComponent` | Default: `$ReactFragment`. Replace the underlying component. |
| onChange `value => mixed` | Required. Function to handle the onChange event. |
| name `string` | Name to be passed onto each child. |
| value `string \| number` | The value of the group. |

#### Radio / Checkbox

| Property        | Description                      |
| --------------- | -------------------------------- |
| component `$ReactComponent` | Default: `'input'`. Replace the underlying component. |
| value `string \| number` | The value of the control. |
