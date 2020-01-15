import React from "react";
import { Text, View } from "react-native";

import * as Font from "expo-font";

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      "Dhurati-Regular": require("./assets/fonts/Dhurjati-Regular.ttf"),
      "Roboto-Black": require("./assets/fonts/Roboto/Roboto-Black.ttf"),
      "Roboto-Thin": require("./assets/fonts/Roboto/Roboto-Thin.ttf")
    });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontFamily: "Roboto-Black", fontSize: 56 }}>
          PUXXLER
        </Text>
      </View>
    );
  }
}
