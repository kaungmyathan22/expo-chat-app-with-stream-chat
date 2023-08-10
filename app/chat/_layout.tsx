import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from "stream-chat-expo";

const API_KEY = "8vwph4mxx8en";
const client = StreamChat.getInstance(API_KEY);

const ChatLayout = () => {
  useEffect(() => {
    const connectUser = async () => {
      await client.connectUser(
        {
          id: "km",
          name: "Kaung Myat Han",
          image: "https://avatars.githubusercontent.com/u/45494917?v=4",
        },
        client.devToken("km")
      );
      console.log("Creating channel");
      const channel = client.channel("livestream", "public", {
        name: "Public",
      });
      await channel.create();
      const channel2 = client.channel("messaging", "travel", {
        name: "Awesome channel about traveling",
      });
      // Here, 'travel' will be the channel ID
      await channel2.create();

      console.log("Done=========");
    };
    connectUser();
    return () => {
      client.disconnectUser();
    };
  }, []);

  return (
    <OverlayProvider>
      <Chat client={client}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Messages" }} />
        </Stack>
      </Chat>
    </OverlayProvider>
  );
};

export default ChatLayout;

const styles = StyleSheet.create({});
