import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from "react-native";

const Card = (props) => {
  let TouchableComp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.OS >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.cardItem}>
      <TouchableComp style={{ flex: 1 }} onPress={() => {}}>
        <View style={styles.container}>
          <Text>{props.name}</Text>
        </View>
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default Card;
