import ButtonPrimary from "./ButtonPrimary";

export default {
  title: "Components/Atoms/Button Primary",
  component: ButtonPrimary,
  tags: ['autodocs'],
  argTypes: {
    label: { control: "text" },
  },
};

export const Default = {
  args: {
    label: 'Default Button',
  },
};

export const Pressed = {
  args: {
    label: 'Pressed Button',
    pressed: true,
  },
};