import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import QuestionCard from "../components/QuestionCard";
import CustomButton from "../components/CustomButton";

import questions from "../questions";
const question = questions[0];

const QuizScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>
      </View>

      {/* Body */}
      <View>
        <QuestionCard question={question} />
        <Text style={styles.time}>{20} sec</Text>
      </View>

      {/* Footer */}
      <CustomButton
        title="Next"
        rightIcon={
          <FontAwesome6 name="arrow-right-long" size={16} color="white" />
        }
      />
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
