import React, { useEffect, useState } from "react";
import { MessageList } from "@hilla/react-components/MessageList.js";
import { MessageInput } from "@hilla/react-components/MessageInput.js";
import type { MessageListItem } from "@vaadin/message-list";
import Logo from "../../assets/logo.png";
import Navbar from "../../components/Navbar/Navbar";
import "./ChatPage.css";
import "dayjs";
import { ChatEndpoint } from "Frontend/generated/endpoints";
import Message from "Frontend/generated/com/example/application/ChatEndpoint/Message";
import NavContainer from "Frontend/components/NavContainer/NavContainer";

// import { getPeople } from 'Frontend/demo/domain/DataService';

export default function ChatPage() {
  const [items, setItems] = useState<MessageListItem[]>([]);
  const [userName, setUserName] = useState("");

  const getCurrentTime: any = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes: any = now.getMinutes();

    // Convert to 12-hour format
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;

    // Add leading zero to minutes if needed
    minutes = minutes < 10 ? "0" + minutes : minutes;

    // Format the time as "h:mm am/pm"
    const formattedTime = `${hours}:${minutes} ${ampm}`;

    return formattedTime;
  };

  const handleUsernameChange = (e: any) => {
    setUserName(e.target.value);
  };

  useEffect(() => {
    // Join the chat when the component mounts
    const subscription = ChatEndpoint.join().onNext((message: any) => {
      // Handle the incoming message
      setItems((prevMessages: any) => [
        ...prevMessages,
        {
          text: message.text,
          time: message.time,
          userName: message.username, // Assuming the username is available in 'message'
          userAbbr: message.username.slice(0, 1),
          userColorIndex: 3,
        },
      ]);
    });
    // Clean up the subscription when the component unmounts
    return () => subscription.cancel();
  }, [ChatEndpoint.join, setItems]);

  //
  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        <NavContainer />
        {/*  */}
        <div className="chatLayout">
          <div className="top">
            <h2>Messages</h2>
            <p>Enter your Name</p>
            <input
              type="text"
              defaultValue={userName}
              onChange={(e) => handleUsernameChange(e)}
            />
            <hr />
          </div>

          <div>
            <MessageList items={items} />
            <MessageInput
              onSubmit={(e: CustomEvent) => {
                ChatEndpoint.send({
                  text: e.detail.value,
                  username: userName,
                  userAbbr: userName.slice(0, 1),
                  userColorIndex: 3,
                });
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
