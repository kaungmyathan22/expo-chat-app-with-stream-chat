import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Channel as ChannelType } from "stream-chat";
import { Channel, ChannelList, MessageInput, MessageList } from "stream-chat-expo";

const ChatScreen = () => {
  const [channel, setChannel] = useState<ChannelType>();
  if (channel) {
    return (
      <Channel channel={channel}>
        <MessageList />
        <MessageInput/>
      </Channel>
    );
  }
  return <ChannelList onSelect={(channel) => setChannel(channel)} />;
};

export default ChatScreen;

const styles = StyleSheet.create({});
