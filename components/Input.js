// 객체다
function Input(props) {
  const { initialValue } = props;
  const [value, setValue] = useState("value", initialValue);

  return {
    type: "input", // div, span, input인지 정하면된다
    props: {
      className: "input",
      value: value,
      onInput: (event) => setValue(event.target.value),
    },
  };
}
