import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider, Searchbar, TextInput } from "react-native-paper";
import { theme } from "../constants/theme";

const categories = [
  "Italian",
  "Mexican",
  "Japanese",
  "Chinese",
  "Indian",
  "French",
  "Greek",
  "Thai",
  "Mediterranean",
  "American",
  "Vegetarian",
  "Vegan",
  "Gluten-free",
  "Desserts",
  "Seafood",
  "Barbecue",
  "Breakfast",
  "Brunch",
  "Snacks",
  "Soups",
];

const tab = [
  {
    tabName: "Dashboard",
    icon: (
      <MaterialCommunityIcons
        name="view-dashboard-outline"
        size={35}
        color={theme.colors.blue}
      />
    ),
  },
  {
    tabName: "Profile",
    icon: (
      <MaterialCommunityIcons
        name="view-dashboard-outline"
        size={35}
        color={theme.colors.blue}
      />
    ),
  },
  {
    tabName: "Order",
    icon: (
      <MaterialCommunityIcons
        name="view-dashboard-outline"
        size={35}
        color={theme.colors.blue}
      />
    ),
  },
  {
    tabName: "Inventory",
    icon: (
      <MaterialCommunityIcons
        name="view-dashboard-outline"
        size={35}
        color={theme.colors.blue}
      />
    ),
  },
  {
    tabName: "Reports",
    icon: (
      <MaterialCommunityIcons
        name="view-dashboard-outline"
        size={35}
        color={theme.colors.blue}
      />
    ),
  },
  {
    tabName: "Settings",
    icon: (
      <MaterialCommunityIcons
        name="view-dashboard-outline"
        size={35}
        color={theme.colors.blue}
      />
    ),
  },
  {
    tabName: "Notification",
    icon: (
      <MaterialCommunityIcons
        name="view-dashboard-outline"
        size={35}
        color={theme.colors.blue}
      />
    ),
  },
];
const productList = [
  {
    productId: 1,
    productName: "Sample One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem reprehenderit quas nulla enim eligendi. Quos velit voluptas ratione architecto illum.",
    availability: 3,
  },
  {
    productId: 2,
    productName: "Sample Two",
    description:
      "Dolor sit amet, consectetur adipisicing elit. Exercitationem reprehenderit quas nulla enim eligendi. Quos velit voluptas ratione architecto illum.",
    availability: 5,
  },
  {
    productId: 3,
    productName: "Sample Three",
    description:
      "Sit amet, consectetur adipisicing elit. Exercitationem reprehenderit quas nulla enim eligendi. Quos velit voluptas ratione architecto illum.",
    availability: 7,
  },
  {
    productId: 4,
    productName: "Sample Four",
    description:
      "Amet, consectetur adipisicing elit. Exercitationem reprehenderit quas nulla enim eligendi. Quos velit voluptas ratione architecto illum.",
    availability: 2,
  },
  {
    productId: 5,
    productName: "Sample Five",
    description:
      "Consectetur adipisicing elit. Exercitationem reprehenderit quas nulla enim eligendi. Quos velit voluptas ratione architecto illum.",
    availability: 10,
  },
  {
    productId: 6,
    productName: "Sample Six",
    description:
      "Adipisicing elit. Exercitationem reprehenderit quas nulla enim eligendi. Quos velit voluptas ratione architecto illum.",
    availability: 8,
  },
  {
    productId: 7,
    productName: "Sample Seven",
    description:
      "Elit. Exercitationem reprehenderit quas nulla enim eligendi. Quos velit voluptas ratione architecto illum.",
    availability: 4,
  },
  {
    productId: 8,
    productName: "Sample Eight",
    description:
      "Reprehenderit quas nulla enim eligendi. Quos velit voluptas ratione architecto illum.",
    availability: 6,
  },
  {
    productId: 9,
    productName: "Sample Nine",
    description:
      "Quas nulla enim eligendi. Quos velit voluptas ratione architecto illum.",
    availability: 9,
  },
  {
    productId: 10,
    productName: "Sample Ten",
    description:
      "Nulla enim eligendi. Quos velit voluptas ratione architecto illum.",
    availability: 3,
  },
  {
    productId: 11,
    productName: "Sample Eleven",
    description: "Enim eligendi. Quos velit voluptas ratione architecto illum.",
    availability: 12,
  },
  {
    productId: 12,
    productName: "Sample Twelve",
    description: "Quos velit voluptas ratione architecto illum.",
    availability: 14,
  },
  {
    productId: 13,
    productName: "Sample Thirteen",
    description: "Velit voluptas ratione architecto illum.",
    availability: 1,
  },
  {
    productId: 14,
    productName: "Sample Fourteen",
    description: "Voluptas ratione architecto illum.",
    availability: 6,
  },
  {
    productId: 15,
    productName: "Sample Fifteen",
    description: "Ratione architecto illum.",
    availability: 11,
  },
];

const Login = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query: string) => setSearchQuery(query);
  return (
    <SafeAreaView>
      <View className="flex flex-row h-full">
        <View className="px-4 flex flex-col justify-center items-center bg-white drop-shadow-md gap-3">
          <TouchableOpacity className="p-4 rounded-lg bg-gray-100">
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              size={36}
              color={theme.colors.blue}
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-4 rounded-lg ">
            <Feather name="user" size={36} color={theme.colors.darkGrey} />
          </TouchableOpacity>
          <TouchableOpacity className="p-4 rounded-lg ">
            <Feather
              name="shopping-cart"
              size={36}
              color={theme.colors.darkGrey}
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-4 rounded-lg ">
            <Feather name="box" size={36} color={theme.colors.darkGrey} />
          </TouchableOpacity>
          <TouchableOpacity className="p-4 rounded-lg ">
            <MaterialIcons
              name="list-alt"
              size={36}
              color={theme.colors.darkGrey}
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-4 rounded-lg ">
            <Feather name="settings" size={36} color={theme.colors.darkGrey} />
          </TouchableOpacity>
          <TouchableOpacity className="p-4 rounded-lg ">
            <Ionicons
              name="notifications-outline"
              size={36}
              color={theme.colors.darkGrey}
            />
          </TouchableOpacity>
        </View>

        <View className="flex h-full px-5 pb-5 w-[50%] ">
          <Searchbar
            className="bg-white "
            placeholder="Search..."
            onChangeText={onChangeSearch}
            inputStyle={styles.searchBarInput}
            placeholderTextColor="#949494"
            style={{
              borderRadius: 0,
              width: "100%",
              elevation: 3,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
            }}
            value={searchQuery}
          />

          {/* Categories */}
          <View>
            <ScrollView
              horizontal={true}
              className="flex flex-row gap-5 py-2 scroll"
            >
              {categories.map((category, i) => (
                <TouchableOpacity key={i} className="p-4 rounded-lg ">
                  <Text
                    style={{
                      fontSize: 16,
                      color: theme.colors.darkGrey,
                    }}
                    className={`font-sans-medium leading-5 tracking-wider font-semibold uppercase`}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <ScrollView className="flex flex-col gap-3 pr-3">
            {productList.map((product, i) => (
              <View
                key={i}
                className="flex flex-row justify-between px-5 py-5 bg-white shadow-2xl items-center"
              >
                <View className="flex flex-col gap-1">
                  <Text className="font-sans-medium">Refrigerator</Text>
                  <Text className="max-w-[600px]">{product.description}</Text>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="cart-plus"
                    size={26}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        <View className="flex flex-1 bg-white p-5 drop-shadow-md shadow-2xl">
          <Text className="font-sans-medium text-2xl">Checkout Items</Text>
          <View>
            <View className="border-b-[1px] border-gray-500 flex flex-row py-3 px-5 justify-between items-center shadow-2xl bg-white ">
              <View className="flex flex-col gap-1">
                <Text className="font-sans-medium capitalize text-lg">
                  dasda
                </Text>
                <Text className="font-sans capitalize text-md">dasda</Text>
              </View>

              <View className="flex flex-row justify-center items-center">
                <TouchableOpacity className="rounded-lg bg-gray-200 p-2">
                  <Feather
                    name="minus"
                    size={24}
                    color={theme.colors.darkGrey}
                  />
                </TouchableOpacity>
                <TextInput
                  value="3"
                  className="bg-white border-none border-0 text-center text-lg "
                  style={{ borderWidth: 0 }}
                />

                <TouchableOpacity className="rounded-lg bg-gray-200 p-2">
                  <Feather
                    name="plus"
                    size={24}
                    color={theme.colors.darkGrey}
                  />
                </TouchableOpacity>
              </View>
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
  searchBarInput: {
    fontFamily: "Gotham-Book",
    fontSize: 18,
    letterSpacing: 0.5,
    color: "#1A1C1E",
  },
});
