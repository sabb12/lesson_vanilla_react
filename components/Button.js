function Button(props) {
  return {
    type: "button", // div, span, input인지 정하면된다
    props: {
      className: "button",
      onclick: () => alert("button clicked!"),
    },
  };
}
