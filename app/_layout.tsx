import { Slot } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { AuthProvider } from "../src/context/auth";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
