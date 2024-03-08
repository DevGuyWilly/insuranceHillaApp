import React, { useEffect, useState } from "react";
import { MessageList } from "@hilla/react-components/MessageList.js";
import { MessageInput } from "@hilla/react-components/MessageInput.js";
import type { MessageListItem } from "@vaadin/message-list";
import Logo from "../../assets/logo.png";
import Navbar from "../../components/Navbar/Navbar";
import "./ChatPage.css";
import { ChatEndpoint } from "Frontend/generated/endpoints";

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

  // Calling the function to get the result

  const handleUsernameChange = (e: any) => {
    setUserName(e.target.value);
  };

  useEffect(() => {
    console.log("Ran Here One");

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
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            height: "100vh",
            width: "20%",
            backgroundColor: "#373737",
            display: "flex",
            flexDirection: "column",
            //   justifyContent: "space-between",
          }}
        >
          <div
            className="LogoAndName"
            style={{
              // border: "1px solid red",
              padding: "20px",
              height: "30%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              // alignContent: "center",
              alignItems: "center",
              zIndex: 100,
            }}
          >
            <img style={{ width: "50px", height: "50px" }} src={Logo} alt="" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "15px",
                //   border: "1px solid",
              }}
            >
              <h2 style={{ color: "white", fontSize: "20px" }}>ASSURANCE +</h2>
              <h3
                style={{
                  letterSpacing: "10px",
                  color: "white",
                  fontSize: "10px",
                }}
              >
                INSURANCE
              </h3>
            </div>
          </div>
          <div
            className="MenuItems"
            style={{
              // border: "1px solid blue",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              // padding: "20px",
              height: "90%",
            }}
          >
            <Navbar />
          </div>
          {/*  */}
        </div>
        {/*  */}
        <div className="chatLayout">
          <div>
            <input
              type="text"
              defaultValue={userName}
              onChange={(e) => handleUsernameChange(e)}
            />
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


