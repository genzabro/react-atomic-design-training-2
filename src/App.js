import { UserProvider } from "./providers/UserProvider";
import { Router } from "./rouer/Router";
import React from "react";
import "./styles.css";
import { RecoilRoot } from "recoil";

const user = {
  name: "おら",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "qqqq@example.com",
  phone: "111-1111-1111",
  company: {
    name: "ああ株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
