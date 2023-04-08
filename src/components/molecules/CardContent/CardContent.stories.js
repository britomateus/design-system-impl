import CardContent from "./CardContent";

export default {
  title: "Components/Molecules/Card Content",
  component: CardContent,
  tags: ["autodocs"],
  argTypes: {
    headingText: { control: "text" },
    subtitleText: { control: "text" },
    paragraphText: { control: "text" },
    buttonLabel: { control: "text" },
  },
};

export const Default = {
  args: {
    headingText: "Heading SM",
    subtitleText: "Subtitle SM",
    paragraphText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    buttonLabel: "Button Label",
  },
};
