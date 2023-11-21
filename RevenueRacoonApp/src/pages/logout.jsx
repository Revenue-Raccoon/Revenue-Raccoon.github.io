import React, { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { CommonActions } from "@react-navigation/native";

const Logout = () => {
  const auth = getAuth();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await signOut(auth);
        // Redirect to login screen
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Login" }],
          })
        );
      } catch (error) {
        console.error("Error logging out:", error);
        // Handle any error or show a message to the user
      }
    };

    handleLogout();
  }, [auth, history]);

  return <div>Logging out...</div>;
};

export default Logout;
