import { View } from "react-native";

import { Question } from "../types";

import AnswerOption from "./AnswerOption";
import Card from "./Card";

type QuestionCard = {
  question: Question;
};

export default function QuestionCard({ question }: QuestionCard) {
  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option) => (
          <AnswerOption key={option} option={option} />
        ))}
      </View>
    </Card>
  );
}
