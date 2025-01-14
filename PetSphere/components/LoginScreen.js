import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useGetDataQuery } from "../redux/features/auth/authApi";
import pawImage from "../assets/paw4.png";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { data } = useGetDataQuery(undefined);

  const handleLogin = () => {
    console.log("Logging in with:", email, password);
  };

  const PawPrint = () => <Image source={pawImage} style={styles.pawPrint} />;

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <PawPrint />
        <PawPrint />
        <PawPrint />
        <Text style={styles.title}>Login</Text>
        <PawPrint />
        <PawPrint />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.inputIcon}>
            <Text>👤</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#666"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View style={styles.inputIcon}>
            <Text>🔒</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.linkText}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  topSection: {
    backgroundColor: "#E9BA45",
    height: "30%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  pawPrint: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    width: "100%",
  },
  formContainer: {
    padding: 20,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 15,
    position: "relative",
  },
  input: {
    backgroundColor: "#ffffff",
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingLeft: 40,
    fontSize: 16,
    color: "#000000",
  },
  inputIcon: {
    position: "absolute",
    left: 12,
    top: 12,
  },
  forgotPassword: {
    color: "#ffffff",
    textAlign: "right",
    marginTop: 10,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#E9BA45",
    height: 50,
    borderRadius: 8,
    width: 100,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    color: "#007AFF",
    textAlign: "center",
    paddingTop: 20,
    fontSize: 14,
  },
});

export default LoginScreen;
