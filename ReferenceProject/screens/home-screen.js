import * as React from "react"
import { useContext, useState, useEffect } from "react"
import { Button, Text, View } from "react-native"
import { StoreContext } from "../context/store-context"
import { types } from "../context/reducers"

export default function HomeView({ navigation }) {
  const { state, dispatch, actions } = useContext(StoreContext)
  const [todoInput, setTodoInput] = useState("")

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home View</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      {state.todoList.map((todo, index) => (
        <Text key={index}>{todo}</Text>
      ))}
    </View>
  )
}
