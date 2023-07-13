const store = {};

const [count, setCount] = useState("count", 1);
const [title, setTitle] = useState("title", "초기값...");

function useState(key, initialValue) {
  if (store[key] === undefined) {
    store[key] = initialValue;
  }

  function setValue(value) {
    store[key] = value;
    renderApp();
    console.log(store);
  }

  return [store[key], setValue];
}

function getHTMLElement(param) {
  const { type, props } = param;
  // createElement = 객체다

  if (typeof param !== "object") {
    return param;
  }

  const $element = document.createElement(type);
  if (props?.className) {
    $element.class = props?.className;
  }

  if (props?.value) {
    $element.value = props?.value;
  }
  if (props?.onInput) {
    $element.oninput = props?.onInput;
  }

  if (props?.onClick) {
    $element.onclick = props?.onClick;
  }

  if (props?.innerText) {
    $element.innerText = props?.innerText;
  }

  if (props?.children?.length > 0) {
    props.children.map((_Element) => {
      $element.append(getHTMLElement(_Element));
    });
  }

  return $element;
}
