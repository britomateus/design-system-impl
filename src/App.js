import "./App.scss";
import HeadingSmall from "./components/atoms/HeadingSmall/HeadingSmall";
import SubtitleSmall from "./components/atoms/SubtitleSmall/SubtitleSmall";
import Paragraph from "./components/atoms/Paragraph/Paragraph";
import CardContent from "./components/molecules/CardContent/CardContent";

/**
 * Sample App to test the Components implementation
 */

function App() {
  return (
    <div className="sample">
      <div className="sample-heading">
        <HeadingSmall text="Heading"></HeadingSmall>
      </div>

      <div className="sample-subtitle">
        <SubtitleSmall text="Subtitle"></SubtitleSmall>
      </div>

      <div className="sample-paragraph">
        <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "></Paragraph>
      </div>

      <div className="sample-card">
        <CardContent
          headingText="Heading SM"
          subtitleText="Subtitle SM"
          paragraphText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          buttonLabel="Button Label"
        ></CardContent>
      </div>
    </div>
  );
}

export default App;
