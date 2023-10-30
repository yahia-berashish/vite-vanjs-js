import van from "vanjs-core";

const { div, button } = van.tags;

export const Counter = () => {
  const count = van.state(0);
  return div(
    { class: "card" },
    button(
      { onclick: () => ++count.val, id: "counter", type: "button" },
      "count is ",
      count
    )
  );
};
