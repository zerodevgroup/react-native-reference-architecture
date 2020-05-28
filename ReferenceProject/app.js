import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StoreProvider } from "./context/store-context"
import HomeScreen from "./screens/home-screen"
import DetailsScreen from "./screens/details-screen"


const Stack = createStackNavigator()

function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  )
}

export default App
