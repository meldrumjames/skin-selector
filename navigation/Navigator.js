import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ChampSelection from "../screens/ChampSelection";
import SkinSelection from "../screens/SkinSelection";

const StackNavigator = createStackNavigator({
  ChampSelect: {
    screen: ChampSelection,
  },
  SkinSelect: {
    screen: SkinSelection,
  },
});

export default createAppContainer(StackNavigator);
