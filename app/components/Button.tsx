import { Button } from "react-native-paper";
import React from "react";
import { theme } from "../../constants/theme";

interface CustomButtonProps {
  text: string;
  mode?: "text" | "outlined" | "contained";
  onPress?: () => void; // Define onPress as an optional function that doesn't take any arguments and returns void
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  mode = "contained",
  onPress,
}) => {
  return (
    <Button
      style={{ borderRadius: 8 }}
      contentStyle={{ height: 50 }}
      buttonColor={theme.colors.blue}
      mode={mode}
      onPress={onPress} // Pass onPress to the underlying Button component
    >
      {text}
    </Button>
  );
};

export default CustomButton;
