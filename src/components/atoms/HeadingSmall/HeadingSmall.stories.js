import HeadingSmall from "./HeadingSmall";

export default {
  title: "Components/Atoms/Heading Small",
  component: HeadingSmall,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
};

export const Default = {
  args: {
    text: "Heading SM",
  },
};
