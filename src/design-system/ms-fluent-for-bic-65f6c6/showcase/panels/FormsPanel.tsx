import {
  Input,
  Checkbox,
  Switch,
  Slider,
  Field,
  Select,
  Textarea,
  Radio,
  RadioGroup,
  Combobox,
  Option,
  SpinButton,
  SearchBox,
} from "@fluentui/react-components";
import { Search20Regular, Mail20Regular } from "@fluentui/react-icons";
import { useState } from "react";
import { ExampleCard } from "../ExampleCard";
import { sp, row, col } from "../styles";

export const FormsPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Input Fields">
      <div style={col(sp.l, { maxWidth: 400 })}>
        <Field label="Text Input">
          <Input placeholder="Enter some text..." />
        </Field>
        <Field label="Search">
          <Input contentBefore={<Search20Regular />} placeholder="Search..." />
        </Field>
        <Field label="Email" required>
          <Input type="email" contentBefore={<Mail20Regular />} placeholder="you@example.com" />
        </Field>
        <Field label="Select">
          <Select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        </Field>
        <Field label="Textarea">
          <Textarea placeholder="Write something..." rows={3} resize="vertical" />
        </Field>
      </div>
    </ExampleCard>
    <ExampleCard title="Input Appearances">
      <div style={col(sp.l, { maxWidth: 400 })}>
        <Field label="Outline (default)">
          <Input appearance="outline" placeholder="Outline" />
        </Field>
        <Field label="Underline">
          <Input appearance="underline" placeholder="Underline" />
        </Field>
        <Field label="Filled Darker">
          <Input appearance="filled-darker" placeholder="Filled darker" />
        </Field>
        <Field label="Filled Lighter">
          <Input appearance="filled-lighter" placeholder="Filled lighter" />
        </Field>
      </div>
    </ExampleCard>
    <ExampleCard title="Input Sizes">
      <div style={col(sp.l, { maxWidth: 400 })}>
        <Input size="small" placeholder="Small" />
        <Input size="medium" placeholder="Medium (default)" />
        <Input size="large" placeholder="Large" />
      </div>
    </ExampleCard>
    <ExampleCard title="Validation States">
      <div style={col(sp.l, { maxWidth: 400 })}>
        <Field label="Success" validationState="success" validationMessage="Looks good!">
          <Input defaultValue="Valid input" />
        </Field>
        <Field label="Warning" validationState="warning" validationMessage="Consider changing this">
          <Input defaultValue="Questionable" />
        </Field>
        <Field label="Error" validationState="error" validationMessage="This field is required">
          <Input />
        </Field>
      </div>
    </ExampleCard>
  </div>
);

export const ComboboxPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Combobox">
      <div style={col(sp.l, { maxWidth: 400 })}>
        <Field label="Choose a fruit">
          <Combobox placeholder="Select a fruit...">
            <Option>Apple</Option>
            <Option>Banana</Option>
            <Option>Cherry</Option>
            <Option>Date</Option>
            <Option>Elderberry</Option>
            <Option>Fig</Option>
            <Option>Grape</Option>
          </Combobox>
        </Field>
        <Field label="Multi-select">
          <Combobox placeholder="Select colors..." multiselect>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
            <Option>Purple</Option>
          </Combobox>
        </Field>
      </div>
    </ExampleCard>
    <ExampleCard title="SearchBox">
      <div style={col(sp.l, { maxWidth: 400 })}>
        <SearchBox placeholder="Search items..." />
        <SearchBox placeholder="Small search" size="small" />
        <SearchBox placeholder="Large search" size="large" />
      </div>
    </ExampleCard>
    <ExampleCard title="SpinButton">
      <div style={col(sp.l, { maxWidth: 300 })}>
        <Field label="Quantity">
          <SpinButton defaultValue={1} min={0} max={100} step={1} />
        </Field>
        <Field label="Price">
          <SpinButton defaultValue={9.99} min={0} max={999} step={0.01} />
        </Field>
      </div>
    </ExampleCard>
  </div>
);

export const TogglesPanel = () => {
  const [switchChecked, setSwitchChecked] = useState(true);
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div style={col(sp.xl)}>
      <ExampleCard title="Checkbox">
        <div style={col(sp.m)}>
          <Checkbox label="Checkbox unchecked" />
          <Checkbox label="Checkbox checked" checked />
          <Checkbox label="Mixed / Indeterminate" checked="mixed" />
          <Checkbox label="Checkbox disabled" disabled />
        </div>
      </ExampleCard>
      <ExampleCard title="Radio Group">
        <div style={col(sp.l)}>
          <Field label="Vertical (default)">
            <RadioGroup defaultValue="option1">
              <Radio value="option1" label="Option 1" />
              <Radio value="option2" label="Option 2" />
              <Radio value="option3" label="Option 3 (disabled)" disabled />
            </RadioGroup>
          </Field>
          <Field label="Horizontal">
            <RadioGroup layout="horizontal" defaultValue="a">
              <Radio value="a" label="A" />
              <Radio value="b" label="B" />
              <Radio value="c" label="C" />
            </RadioGroup>
          </Field>
        </div>
      </ExampleCard>
      <ExampleCard title="Switch">
        <div style={col(sp.m)}>
          <Switch
            checked={switchChecked}
            onChange={(_, d) => setSwitchChecked(d.checked)}
            label={switchChecked ? "Enabled" : "Disabled"}
          />
          <Switch label="Label before" labelPosition="before" />
          <Switch label="Disabled switch" disabled />
        </div>
      </ExampleCard>
      <ExampleCard title="Slider">
        <div style={col(sp.m, { maxWidth: 320 })}>
          <span className="fluent-label">Value: {sliderValue}</span>
          <Slider
            value={sliderValue}
            onChange={(_, d) => setSliderValue(d.value)}
            min={0}
            max={100}
          />
          <Slider defaultValue={30} min={0} max={100} step={10} disabled />
        </div>
      </ExampleCard>
    </div>
  );
};
