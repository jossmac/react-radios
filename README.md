# React Radios

Brings radio group behavior into line with other input types in React like the [select tag](https://reactjs.org/docs/forms.html#the-select-tag).

```js
<RadioGroup value={this.state.fruit} onChange={this.handleChange}>
  <Radio value="apple" /> Apple
  <Radio value="orange" /> Orange
  <Radio value="banana" /> Banana
</RadioGroup>
```

If you'd like to use the same single-value pattern for checkboxes,
there's components for that too:

```js
<CheckboxGroup value={this.state.numbers} onChange={this.handleChange}>
  <Checkbox value={1} /> One
  <Checkbox value={2} /> Two
  <Checkbox value={3} /> Three
</CheckboxGroup>
```
