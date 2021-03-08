import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { CHAMP } from "../data/dummy-data";
import ChampCard from "../components/ChampListCard";

const ChampSelection = (props) => {
  const renderListItem = (itemData) => {
    return (
      <View style={styles.screen}>
        <ChampCard name={itemData.item.name} />
      </View>
    );
  };

  return <FlatList data={CHAMP} renderItem={renderListItem} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default ChampSelection;
