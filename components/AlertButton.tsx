import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AlertButton = () => {
  const showAlert = () => {
    Alert.alert("Alert!", "You just pressed the alert button", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Ok",
        style: "default",
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showAlert}>
        <Text style={styles.buttonText}>Show Alert</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlertButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: "absolute",
    bottom: 20,
    marginHorizontal: "auto",
    backgroundColor: "#128de4ff",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius:30,
    borderColor: "#6eb7ebff",
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700'
  },
});
