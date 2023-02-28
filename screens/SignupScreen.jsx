import { useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/auth";

function SignupScreen() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  async function signupHandler({ email, password }) {
    setIsAuthenticate(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not sign you up. Please check your details or try again later!"
      );
    }
    setIsAuthenticate(false);
  }
  if (isAuthenticate) {
    return <LoadingOverlay message="Creating User..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
