import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image
} from "react-native";
import React, { useState } from "react";
import { firebase } from "../firebase.config";
import { useRouter } from "expo-router";
import { FONT, SIZES, COLORS, SHADOWS } from "../constants";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (email, password) => {
    try {
      const message = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(message);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={StyleSheet.container}>
      <Text
        style={{
          fontFamily: FONT.regular,
          fontSize: SIZES.large,
          color: COLORS.primary,
          fontSize: 30,
          paddingLeft: 5,
        }}
      >
        Welcome to Rscars,
      </Text>
      <Text
        style={{
          fontFamily: FONT.regular,
          fontSize: SIZES.large,
          color: COLORS.secondary,
          fontSize: 20,
          paddingLeft: 5,
        }}
      >
        It seems you havn't logged in with us, we please you to log in or create an account with us.
      </Text>
      <View style={{ marginTop: 40 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        onPress={() => loginUser(email, password)}
        style={styles.button}
      >
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push(`/Registration`)}
        style={{ marginTop: 20 }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Don't have an account? Register Now.
        </Text>
      </TouchableOpacity>
        <View>
        <Image
        source={{
          uri: "https://res.cloudinary.com/domrtfad0/image/upload/v1680646181/rs_tsupkv.jpg"
        }}
        resizeMode='stretch'
        style={styles.Image}
      />
        </View>

    </View>

  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#FE7654",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    marginTop: 50,
    height: 70,
    width: 250,
    backgroundColor: "#FE7654",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  Image: {
    height: 100,
    width: 450,
    paddingLeft: 10
  }
});
