import React, { Component } from "react";
import { Text, View } from "react-native";

import * as Font from "expo-font";

export default class App extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Dhurati-Regular": require("./assets/fonts/Dhurjati-Regular.ttf"),
      "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
      "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
      "Roboto-Thin": require("./assets/fonts/Roboto/Roboto-Thin.ttf")
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {this.state.fontLoaded ? (
          <Text style={{ fontFamily: "Roboto-Regular", fontSize: 56 }}>
            PUXXLER
          </Text>
        ) : null}
      </View>
    );
  }
}
