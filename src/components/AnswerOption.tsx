import { Text, StyleSheet, Pressable } from "react-native";

type AnswerOption = {
  option: string;
};

export default function AnswerOption({ option }: AnswerOption) {
  const isSelected = false;

  return (
    <Pressable
      onPress={() => {}}
      style={[
        styles.container,
        isSelected && {
          backgroundColor: "#E1F396",
          borderColor: "#E1F396",
        },
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 20,
    borderRadius: 100,
  },
});
