import * as D from "../data";
import { Title, Subtitle, Summary, Paragraph } from "../components/";

const paragraphs = D.makeArray(2).map(D.randomParagraphs).join("\n\n");
const summery = D.makeArray(3).map(D.randomSentence).join("\n");

export default function TextsTest() {
  return (
    <div>
      <Title>TextsTest</Title>
      <div>
        <Title className="text-blue-600">{D.randomTitleText()}</Title>
        <Subtitle className="text-blue-400">{D.randomSentence()}</Subtitle>
        <p className="text-xl italic font-bold text-center text-gray-900">
          {D.randomName()}
        </p>
        <Paragraph numberOfLines={5}>{paragraphs}</Paragraph>
        <Summary className="text-center text-gray-500">{summery}</Summary>
        <p className="text-center text-p">
          {D.randomDayMonthYear()} ({D.randomRelativeDate()})
        </p>
      </div>
    </div>
  );
}
