import { Router } from "./rouer/Router";
import "./styles.css";

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
  return <Router />;
}
