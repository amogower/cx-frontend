import { DropdownPill } from './DropdownPill';

const Container = (Story: () => JSX.Element): JSX.Element => (
  <div className="container">
    <Story />
  </div>
);

export default {
  title: 'UI / Dropdown',
  parameters: {
    layout: 'centered',
  },
  decorators: [Container],
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

export const Pill = (): JSX.Element => (
  <DropdownPill
    buttonText="Dropdown"
    items={[
      {
        title: 'Item 1',
      },
      {
        title: 'Item 2',
      },
      {
        title: 'Item 3',
      },
    ]}
    onClick={noop}
    renderItem={({ title }) => <span>{title}</span>}
  />
);

export const PillWithTitle = (): JSX.Element => (
  <DropdownPill
    buttonText="Dropdown"
    items={[
      {
        title: 'Item 1',
      },
      {
        title: 'Item 2',
      },
      {
        title: 'Item 3',
      },
    ]}
    onClick={noop}
    renderItem={({ title }) => <span>{title}</span>}
    title="Some title"
  />
);
