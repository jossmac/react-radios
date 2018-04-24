# React Radios

Brings radio group behavior into line with other input types in React like the [select tag](https://reactjs.org/docs/forms.html#the-select-tag).

```js
import { RadioGroup, Radio } from 'react-radios';

<RadioGroup name="fruit" value={this.state.fruit} onChange={this.handleChange}>
  <Radio value="apple" /> Apple
  <Radio value="orange" /> Orange
  <Radio value="banana" /> Banana
</RadioGroup>;
```
