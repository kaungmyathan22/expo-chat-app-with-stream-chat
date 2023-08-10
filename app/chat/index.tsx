import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { ChannelList } from "stream-chat-expo";

const ChatScreen = () => {
  const router = useRouter();
  return (
    <ChannelList
      onSelect={(channel) => router.push(`/chat/channel/${channel.id}`)}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
