import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LoginImport from "../assets/images/login_image.png";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../constants/theme";
import { Button, TextInput } from "react-native-paper";
import CustomButton from "./components/Button";

enum Strategy {
  Google = "oauth_google",
  Apple = "oauth_apple",
  Facebook = "oauth_facebook",
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useWarmUpBrowser();

  const router = useRouter();
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: "oauth_apple" });
  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: "oauth_facebook",
  });

  const onSelectAuth = async (strategy: Strategy) => {
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
      [Strategy.Apple]: appleAuth,
      [Strategy.Facebook]: facebookAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectedAuth();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.back();
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <View className="flex flex-row items-center h-full justify-between">
          <View className=" w-[50%] h-full overflow-hidden flex justify-center items-center">
            <Image source={LoginImport} />
          </View>

          <View
            className={`p-10 bg-[${theme.colors.grey}] h-full w-[50%] justify-center items-center`}
          >
            <View className="gap-2 w-[450px]">
              <TextInput
                label="Email"
                value={email}
                className="rounded-lg"
                mode="outlined"
                onChangeText={(text) => setEmail(email)}
              />
              <TextInput
                label="Password"
                value={password}
                mode="outlined"
                className="mb-10"
                onChangeText={(text) => setEmail(password)}
              />
              <CustomButton
                text="Sign In"
                mode="contained"
                onPress={() => console.log("Sign In")}
              />
              <Text className="text-center text-gray-500 text-base font-semibold">
                Or
              </Text>
              <View className="flex flex-row justify-between w-full mb-3">
                <Button
                  className="rounded-lg font-medium  w-[46%]"
                  textColor="black"
                  mode="outlined"
                  onPress={() => onSelectAuth(Strategy.Google)}
                  icon={() => (
                    <AntDesign name="google" size={24} color="#F4B400" />
                  )}
                >
                  Google
                </Button>

                <Button
                  className="rounded-lg font-medium w-[46%]"
                  textColor="black"
                  mode="outlined"
                  icon={() => (
                    <FontAwesome5 name="facebook" size={24} color="#316FF6" />
                  )}
                  style={{ outlineColor: "yellow" }}
                  onPress={() => onSelectAuth(Strategy.Facebook)}
                >
                  Facebook
                </Button>
              </View>
              <Text className="text-gray-500 max-w-[300px] leading-6">
                By signing up, I agree to the{" "}
                <Text className="underline text-blue-500">
                  Terms of Service
                </Text>{" "}
                and{" "}
                <Text className="text-blue-500 underline">Privacy Policy</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
  },

  seperatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  seperator: {
    color: "grey",
    fontSize: 16,
  },
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "grey",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: "#000",
    fontSize: 16,
  },
});
