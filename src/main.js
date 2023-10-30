import "./style.css";
import van from "vanjs-core";
import vanjsLogo from "./vanjs.svg";
import viteLogo from "/vite.svg";
import { Counter } from "./counter";

const { div, a, img, p } = van.tags;
const app = document.querySelector("#app");

const Main = () => {
  return div(
    a(
      { href: "https://vitejs.dev", target: "_blank" },
      img({ src: viteLogo, class: "logo", alt: "Vite logo" })
    ),
    a(
      { href: "https://vanjs.org", target: "_blank" },
      img({ src: vanjsLogo, class: "logo vanilla", alt: "VanJS logo" })
    ),
    Counter(),
    p(
      { class: "read-the-docs" },
      "Click on the Vite and VanJS logos to learn more"
    )
  );
};

van.add(app, Main());
