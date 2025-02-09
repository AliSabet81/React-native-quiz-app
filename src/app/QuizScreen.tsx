import { useEffect } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import Card from "../components/Card";
import { useTimer } from "../hooks/useTimer";
import QuestionCard from "../components/QuestionCard";
import CustomButton from "../components/CustomButton";
import { useQuizContext } from "../providers/QuizProvider";

const QuizScreen = () => {
  const { question, questionIndex, onNext, score, totalQuestions, bestScore } =
    useQuizContext();

  const { time, startTimer, clearTimer } = useTimer(20);

  useEffect(() => {
    startTimer();

    return () => {
      clearTimer();
    };
  }, [question]);

  useEffect(() => {
    if (time <= 0) {
      onNext();
    }
  }, [time]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>
            Question {questionIndex + 1}/{totalQuestions}
          </Text>
        </View>

        {/* Body */}
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>{20} sec</Text>
          </View>
        ) : (
          <Card title="Well done">
            <Text>
              Correct answers: {score}/{totalQuestions}
            </Text>
            <Text>Best score: {bestScore}</Text>
          </Card>
        )}

        {/* Footer */}
        <CustomButton
          title="Next"
          onPress={onNext}
          rightIcon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FDFEF4",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "#005055",
  },
  time: {
    textAlign: "center",
    marginTop: 15,
    color: "#005055",
    fontWeight: "bold",
  },
});

export default QuizScreen;
