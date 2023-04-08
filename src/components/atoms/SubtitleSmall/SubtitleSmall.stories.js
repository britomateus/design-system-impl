import SubtitleSmall from "./SubtitleSmall";

export default {
  title: "Components/Atoms/Subtitle Small",
  component: SubtitleSmall,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
};

export const Default = {
  args: {
    text: "Subtitle SM",
  },
};
