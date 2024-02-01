import { useContext, useState } from "react";
import { createUser } from "../util/Auth";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { Alert } from "react-native";

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const authContext = useContext(AuthContext);

  async function signupHandeler({ email, password }) {
    setIsLoading(true);
    try {
      const token = await createUser(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert("Something went wrong, please check again");
      setIsLoading(false);
    }
  }

  if (isLoading) return <LoadingOverlay message="Loading" />;

  return <AuthContent onAuthenticate={signupHandeler} />;
}

export default SignupScreen;
