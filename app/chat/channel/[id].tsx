import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Channel as ChannelType } from "stream-chat";
import {
  Channel,
  MessageInput,
  MessageList,
  useChatContext,
} from "stream-chat-expo";

const ChannelScreen = () => {
  const [channel, setChannel] = useState<ChannelType>();
  const { client } = useChatContext();
  const { id } = useLocalSearchParams();
  console.log({ id });
  useEffect(() => {
    async function fetchChannel() {
      const _id: string = typeof id === "string" ? id : id[0];
      const channels = await client.queryChannels({ id: { $eq: _id } });
      setChannel(channels[0]);
    }
    fetchChannel();
    return () => {};
  }, [id]);

  if (!channel) {
    return <ActivityIndicator />;
  }
  return (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

export default ChannelScreen;

const styles = StyleSheet.create({});
