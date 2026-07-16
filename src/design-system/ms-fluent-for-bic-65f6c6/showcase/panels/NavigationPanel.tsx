import {
  TabList,
  Tab,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbDivider,
  BreadcrumbButton,
  Link,
  Body1,
} from "@fluentui/react-components";
import {
  Home20Regular,
  Folder20Regular,
  Document20Regular,
} from "@fluentui/react-icons";
import { ExampleCard } from "../ExampleCard";
import { sp, row, col } from "../styles";

export const TabsPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Horizontal Tabs">
      <TabList defaultSelectedValue="tab1">
        <Tab value="tab1">Overview</Tab>
        <Tab value="tab2">Analytics</Tab>
        <Tab value="tab3">Settings</Tab>
        <Tab value="tab4" disabled>Disabled</Tab>
      </TabList>
    </ExampleCard>
    <ExampleCard title="Tab Sizes">
      <div style={col(sp.l)}>
        <TabList defaultSelectedValue="s1" size="small">
          <Tab value="s1">Small</Tab>
          <Tab value="s2">Tabs</Tab>
          <Tab value="s3">Here</Tab>
        </TabList>
        <TabList defaultSelectedValue="m1" size="medium">
          <Tab value="m1">Medium</Tab>
          <Tab value="m2">Tabs</Tab>
          <Tab value="m3">Here</Tab>
        </TabList>
        <TabList defaultSelectedValue="l1" size="large">
          <Tab value="l1">Large</Tab>
          <Tab value="l2">Tabs</Tab>
          <Tab value="l3">Here</Tab>
        </TabList>
      </div>
    </ExampleCard>
    <ExampleCard title="Tab Appearances">
      <div style={col(sp.l)}>
        <TabList defaultSelectedValue="t1" appearance="transparent">
          <Tab value="t1">Transparent</Tab>
          <Tab value="t2">Appearance</Tab>
        </TabList>
        <TabList defaultSelectedValue="s1" appearance="subtle">
          <Tab value="s1">Subtle</Tab>
          <Tab value="s2">Appearance</Tab>
        </TabList>
      </div>
    </ExampleCard>
    <ExampleCard title="Vertical Tabs">
      <TabList defaultSelectedValue="v1" vertical>
        <Tab value="v1">General</Tab>
        <Tab value="v2">Appearance</Tab>
        <Tab value="v3">Notifications</Tab>
      </TabList>
    </ExampleCard>
    <ExampleCard title="With Icons">
      <TabList defaultSelectedValue="i1">
        <Tab value="i1" icon={<Home20Regular />}>Home</Tab>
        <Tab value="i2" icon={<Folder20Regular />}>Files</Tab>
        <Tab value="i3" icon={<Document20Regular />}>Documents</Tab>
      </TabList>
    </ExampleCard>
  </div>
);

export const BreadcrumbPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Breadcrumb">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbButton>Home</BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbButton>Components</BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbButton current>Breadcrumb</BreadcrumbButton>
        </BreadcrumbItem>
      </Breadcrumb>
    </ExampleCard>
    <ExampleCard title="Breadcrumb Sizes">
      <div style={col(sp.l)}>
        <Breadcrumb size="small">
          <BreadcrumbItem><BreadcrumbButton>Home</BreadcrumbButton></BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem><BreadcrumbButton current>Small</BreadcrumbButton></BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb size="medium">
          <BreadcrumbItem><BreadcrumbButton>Home</BreadcrumbButton></BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem><BreadcrumbButton current>Medium</BreadcrumbButton></BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb size="large">
          <BreadcrumbItem><BreadcrumbButton>Home</BreadcrumbButton></BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem><BreadcrumbButton current>Large</BreadcrumbButton></BreadcrumbItem>
        </Breadcrumb>
      </div>
    </ExampleCard>
    <ExampleCard title="Link">
      <div style={col(sp.m)}>
        <Link href="#">Default link</Link>
        <Link href="#" appearance="subtle">Subtle link</Link>
        <Link href="#" inline>Inline link within text content</Link>
        <Link href="#" disabled>Disabled link</Link>
      </div>
    </ExampleCard>
    <ExampleCard title="Link in Context">
      <Body1>
        This is a paragraph with an <Link href="#" inline>inline link</Link> embedded
        in the text. You can also use <Link href="#" inline appearance="subtle">subtle inline links</Link> for
        less emphasis.
      </Body1>
    </ExampleCard>
  </div>
);
