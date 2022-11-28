import React from 'react';
import {Text, View} from 'react-native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {
  NavigationContainer,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  function navigateTo(
    screen: keyof RootStackParamList,
    params?: RootStackParamList[keyof RootStackParamList],
  ) {
    navigation.navigate(screen, params);
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen {route?.params?.userId}</Text>
    </View>
  );
}

type RootStackParamList = {
  Home: undefined;
  Details: {userId: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
