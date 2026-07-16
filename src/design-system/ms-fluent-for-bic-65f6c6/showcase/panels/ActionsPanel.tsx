import {
  Button,
  CompoundButton,
  SplitButton,
  ToggleButton,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuItemCheckbox,
  MenuItemRadio,
  MenuDivider,
  MenuGroup,
  MenuGroupHeader,
} from "@fluentui/react-components";
import {
  Add20Regular,
  Settings20Regular,
  MoreHorizontal20Regular,
  Edit20Regular,
  Copy20Regular,
  Delete20Regular,
  Save20Regular,
  ArrowDownload20Regular,
  Mail20Regular,
  Calendar20Regular,
} from "@fluentui/react-icons";
import { useState } from "react";
import { ExampleCard } from "../ExampleCard";
import { sp, row, col } from "../styles";

export const ButtonsPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Appearances">
      <div style={row(sp.m)}>
        <Button appearance="primary">Primary</Button>
        <Button appearance="secondary">Secondary</Button>
        <Button appearance="subtle">Subtle</Button>
        <Button appearance="outline">Outline</Button>
        <Button appearance="transparent">Transparent</Button>
      </div>
    </ExampleCard>
    <ExampleCard title="Sizes">
      <div style={row(sp.m)}>
        <Button appearance="primary" size="small">Small</Button>
        <Button appearance="primary">Medium</Button>
        <Button appearance="primary" size="large">Large</Button>
      </div>
    </ExampleCard>
    <ExampleCard title="Shapes">
      <div style={row(sp.m)}>
        <Button appearance="primary" shape="rounded">Rounded</Button>
        <Button appearance="primary" shape="circular">Circular</Button>
        <Button appearance="primary" shape="square">Square</Button>
      </div>
    </ExampleCard>
    <ExampleCard title="With Icon & Disabled">
      <div style={row(sp.m)}>
        <Button appearance="primary" icon={<Add20Regular />}>With Icon</Button>
        <Button appearance="primary" disabled>Disabled</Button>
        <Button appearance="outline" icon={<Settings20Regular />} aria-label="Settings" />
      </div>
    </ExampleCard>
    <ExampleCard title="Compound Button">
      <div style={row(sp.l)}>
        <CompoundButton icon={<Mail20Regular />} secondaryContent="Send a message">
          Mail
        </CompoundButton>
        <CompoundButton appearance="primary" icon={<Calendar20Regular />} secondaryContent="View schedule">
          Calendar
        </CompoundButton>
      </div>
    </ExampleCard>
    <ExampleCard title="Toggle Button">
      <div style={row(sp.m)}>
        <ToggleButton icon={<Save20Regular />}>Save</ToggleButton>
        <ToggleButton appearance="primary">Toggle Primary</ToggleButton>
        <ToggleButton appearance="subtle">Toggle Subtle</ToggleButton>
      </div>
    </ExampleCard>
    <ExampleCard title="Split Button">
      <div style={row(sp.m)}>
        <SplitButton
          appearance="primary"
          icon={<ArrowDownload20Regular />}
          menuButton={{ "aria-label": "More download options" }}
        >
          Download
        </SplitButton>
      </div>
    </ExampleCard>
  </div>
);

export const MenusPanel = () => {
  const [checkedValues, setCheckedValues] = useState<Record<string, string[]>>({ view: ["grid"] });

  return (
    <div style={col(sp.xl)}>
      <ExampleCard title="Basic Menu">
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <Button appearance="subtle" icon={<MoreHorizontal20Regular />}>Actions</Button>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem icon={<Edit20Regular />}>Edit</MenuItem>
              <MenuItem icon={<Copy20Regular />}>Duplicate</MenuItem>
              <MenuDivider />
              <MenuItem icon={<Delete20Regular />}>Delete</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </ExampleCard>
      <ExampleCard title="Grouped Menu">
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <Button>File Menu</Button>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuGroup>
                <MenuGroupHeader>File</MenuGroupHeader>
                <MenuItem>New</MenuItem>
                <MenuItem>Open</MenuItem>
                <MenuItem>Save</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup>
                <MenuGroupHeader>Edit</MenuGroupHeader>
                <MenuItem>Cut</MenuItem>
                <MenuItem>Copy</MenuItem>
                <MenuItem>Paste</MenuItem>
              </MenuGroup>
            </MenuList>
          </MenuPopover>
        </Menu>
      </ExampleCard>
      <ExampleCard title="Checkbox & Radio Items">
        <div style={row(sp.m)}>
          <Menu
            checkedValues={checkedValues}
            onCheckedValueChange={(_, { name, checkedItems }) =>
              setCheckedValues((prev) => ({ ...prev, [name]: checkedItems }))
            }
          >
            <MenuTrigger disableButtonEnhancement>
              <Button>View Options</Button>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItemCheckbox name="view" value="grid">Grid</MenuItemCheckbox>
                <MenuItemCheckbox name="view" value="list">List</MenuItemCheckbox>
                <MenuDivider />
                <MenuItemRadio name="sort" value="name">Sort by Name</MenuItemRadio>
                <MenuItemRadio name="sort" value="date">Sort by Date</MenuItemRadio>
              </MenuList>
            </MenuPopover>
          </Menu>
        </div>
      </ExampleCard>
    </div>
  );
};
