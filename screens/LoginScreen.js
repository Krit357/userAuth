import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { userlogin } from "../util/Auth";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const authContext = useContext(AuthContext);

  async function loginHandeler({ email, password }) {
    setIsLoading(true);
    try {
      const token = await userlogin(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert("User or password is wrong");
      setIsLoading(false);
    }
  }

  if (isLoading) return <LoadingOverlay message="Logging" />;

  return <AuthContent isLogin onAuthenticate={loginHandeler} />;
}

export default LoginScreen;
