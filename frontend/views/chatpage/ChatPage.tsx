import React, { useEffect, useState } from "react";
import { MessageList } from "@hilla/react-components/MessageList.js";
import { MessageInput } from "@hilla/react-components/MessageInput.js";
import type { MessageListItem } from "@vaadin/message-list";
import Logo from "../../assets/logo.png";
import Navbar from "../../components/Navbar/Navbar";
import "../../themes/insuranceapp/styles.css";
import Message from "Frontend/generated/com/example/application/ChatEndpoint/Message";
import { ChatEndpoint } from "Frontend/generated/endpoints";

// import { getPeople } from 'Frontend/demo/domain/DataService';

export default function ChatPage() {
  function getPeople(arg0: { count: number }) {
    throw new Error("Function not implemented.");
  }

  const [messages, setMessages] = useState<Message[]>([]);

  const [items, setItems] = useState<MessageListItem[]>([]);
  const [userName, setUserName] = useState<String>("");

  // useEffect(() => {
  //   getPeople({ count: 1 }).then(({ people }) => {
  //     const person = people[0];
  //     setItems([
  //       {
  //         text: "Nature does not hurry, yet everything gets accomplished.",
  //         time: "yesterday",
  //         userName: "Matt Mambo",
  //         userColorIndex: 1,
  //       },
  //       {
  //         text: "Using your talent, hobby or profession in a way that makes you contribute with something good to this world is truly the way to go.",
  //         time: "right now",
  //         userName: "Linsey Listy",
  //         userColorIndex: 2,
  //         userImg: person.pictureUrl,
  //       },
  //     ]);
  //   });
  // }, []);

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
        <MessageList items={items} />
        <MessageInput
          onSubmit={(e: CustomEvent) => {
            ChatEndpoint.send({});
            //
            setItems([
              ...items,
              {
                text: e.detail.value,
                time: "seconds ago",
                userName: "Milla Sting",
                userAbbr: "MS",
                userColorIndex: 3,
              },
            ]);
          }}
        />
      </div>
    </>
  );
}
