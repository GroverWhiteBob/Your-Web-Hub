import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogContent,
  DialogActions,
  Button,
  Body1,
  Toolbar,
  ToolbarButton,
  ToolbarToggleButton,
  ToolbarDivider,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverSurface,
  Input,
  Field,
  Body1Strong,
  Caption1,
} from "@fluentui/react-components";
import {
  TextBold20Regular,
  TextItalic20Regular,
  TextUnderline20Regular,
  TextAlignLeft20Regular,
  TextAlignCenter20Regular,
  TextAlignRight20Regular,
  Cut20Regular,
  Copy20Regular,
  ClipboardPaste20Regular,
  Info20Regular,
} from "@fluentui/react-icons";
import { ExampleCard } from "../ExampleCard";
import { sp, row, col } from "../styles";

export const AccordionPanel_ = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Accordion">
      <Accordion>
        <AccordionItem value="1">
          <AccordionHeader>Getting Started</AccordionHeader>
          <AccordionPanel>
            <Body1>
              Install the package and wrap your app with FluentProvider to get started
              with Fluent UI React components.
            </Body1>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionHeader>Theming</AccordionHeader>
          <AccordionPanel>
            <Body1>
              Fluent UI supports light, dark, and high contrast themes out of the box.
              Simply change the theme prop on FluentProvider.
            </Body1>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionHeader>Accessibility</AccordionHeader>
          <AccordionPanel>
            <Body1>
              All components are built with WCAG 2.1 AA compliance in mind, including
              keyboard navigation, screen reader support, and focus management.
            </Body1>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </ExampleCard>
    <ExampleCard title="Multiple Open Panels">
      <Accordion multiple>
        <AccordionItem value="1">
          <AccordionHeader>Section A</AccordionHeader>
          <AccordionPanel><Body1>Content for section A.</Body1></AccordionPanel>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionHeader>Section B</AccordionHeader>
          <AccordionPanel><Body1>Content for section B.</Body1></AccordionPanel>
        </AccordionItem>
      </Accordion>
    </ExampleCard>
  </div>
);

export const DialogPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Dialog">
      <Dialog>
        <DialogTrigger disableButtonEnhancement>
          <Button appearance="primary">Open Dialog</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogContent>
              <Body1>Are you sure you want to proceed? This action cannot be undone.</Body1>
            </DialogContent>
            <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">Cancel</Button>
              </DialogTrigger>
              <Button appearance="primary">Confirm</Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </ExampleCard>
    <ExampleCard title="Alert Dialog">
      <Dialog modalType="alert">
        <DialogTrigger disableButtonEnhancement>
          <Button appearance="primary">Open Alert</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Delete Item</DialogTitle>
            <DialogContent>
              <Body1>This will permanently delete the item. This action cannot be reversed.</Body1>
            </DialogContent>
            <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button>Cancel</Button>
              </DialogTrigger>
              <Button appearance="primary">Delete</Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </ExampleCard>
    <ExampleCard title="Non-modal Dialog">
      <Dialog modalType="non-modal">
        <DialogTrigger disableButtonEnhancement>
          <Button>Open Non-modal</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Quick Note</DialogTitle>
            <DialogContent>
              <Field label="Note">
                <Input placeholder="Type something..." />
              </Field>
            </DialogContent>
            <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button>Close</Button>
              </DialogTrigger>
              <Button appearance="primary">Save</Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </ExampleCard>
  </div>
);

export const ToolbarPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Toolbar">
      <Toolbar>
        <Tooltip content="Bold" relationship="label">
          <ToolbarButton icon={<TextBold20Regular />} aria-label="Bold" />
        </Tooltip>
        <Tooltip content="Italic" relationship="label">
          <ToolbarButton icon={<TextItalic20Regular />} aria-label="Italic" />
        </Tooltip>
        <Tooltip content="Underline" relationship="label">
          <ToolbarButton icon={<TextUnderline20Regular />} aria-label="Underline" />
        </Tooltip>
        <ToolbarDivider />
        <Tooltip content="Align Left" relationship="label">
          <ToolbarButton icon={<TextAlignLeft20Regular />} aria-label="Align Left" />
        </Tooltip>
        <Tooltip content="Align Center" relationship="label">
          <ToolbarButton icon={<TextAlignCenter20Regular />} aria-label="Align Center" />
        </Tooltip>
        <Tooltip content="Align Right" relationship="label">
          <ToolbarButton icon={<TextAlignRight20Regular />} aria-label="Align Right" />
        </Tooltip>
        <ToolbarDivider />
        <Tooltip content="Cut" relationship="label">
          <ToolbarButton icon={<Cut20Regular />} aria-label="Cut" />
        </Tooltip>
        <Tooltip content="Copy" relationship="label">
          <ToolbarButton icon={<Copy20Regular />} aria-label="Copy" />
        </Tooltip>
        <Tooltip content="Paste" relationship="label">
          <ToolbarButton icon={<ClipboardPaste20Regular />} aria-label="Paste" />
        </Tooltip>
      </Toolbar>
    </ExampleCard>
    <ExampleCard title="Toggle Toolbar Buttons">
      <Toolbar>
        <ToolbarToggleButton icon={<TextBold20Regular />} name="format" value="bold" aria-label="Bold" />
        <ToolbarToggleButton icon={<TextItalic20Regular />} name="format" value="italic" aria-label="Italic" />
        <ToolbarToggleButton icon={<TextUnderline20Regular />} name="format" value="underline" aria-label="Underline" />
      </Toolbar>
    </ExampleCard>
  </div>
);

export const PopoverPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Basic Popover">
      <div style={row(sp.l)}>
        <Popover>
          <PopoverTrigger disableButtonEnhancement>
            <Button appearance="primary">Click me</Button>
          </PopoverTrigger>
          <PopoverSurface>
            <div style={col(sp.s)}>
              <Body1Strong>Popover Title</Body1Strong>
              <Body1>This is a popover with some content. Click elsewhere to dismiss.</Body1>
            </div>
          </PopoverSurface>
        </Popover>
        <Popover withArrow>
          <PopoverTrigger disableButtonEnhancement>
            <Button icon={<Info20Regular />}>With Arrow</Button>
          </PopoverTrigger>
          <PopoverSurface>
            <div style={col(sp.s)}>
              <Body1Strong>With Arrow</Body1Strong>
              <Body1>This popover has an arrow pointing to the trigger.</Body1>
            </div>
          </PopoverSurface>
        </Popover>
      </div>
    </ExampleCard>
    <ExampleCard title="Popover Positioning">
      <div style={row(sp.m)}>
        {(["above", "below", "before", "after"] as const).map((pos) => (
          <Popover key={pos} positioning={pos}>
            <PopoverTrigger disableButtonEnhancement>
              <Button size="small">{pos}</Button>
            </PopoverTrigger>
            <PopoverSurface>
              <Caption1>Positioned {pos}</Caption1>
            </PopoverSurface>
          </Popover>
        ))}
      </div>
    </ExampleCard>
  </div>
);
