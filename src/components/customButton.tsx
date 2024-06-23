import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
interface CustomButtonProps {
  backgroundColor: string;
  color: string;
  text: string;
  onPress: () => void;
  fontSize?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  backgroundColor,
  color,
  text,
  onPress,
  fontSize = 16,
  width,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, width }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { fontSize, color }]}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
  },
  buttonText: {
    fontWeight: "700",
  },
});

export default CustomButton;
