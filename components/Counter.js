// react library 이런 식으로 작성 한다.
function Counter() {
  const [count, setCount] = useState("count", 0);

  return {
    type: "div", // div, span, input인지 정하면된다
    props: {
      className: "container",
      children: [
        {
          type: "button",
          props: {
            innerText: "+",
            onClick: () => setCount(count + 1),
          },
        },
        count,
        {
          type: "button",
          props: {
            innerText: "-",
            onClick: () => setCount(count - 1),
          },
        },
      ],
    },
  };
}

// 같은 거다 위에 가 복잡헤서 jsx문법을 사용 한다

// 이 코드를 작성 하고 npm run build 할 때 function Counter() 처럼 만들어 준다
// return (
//     <div>
//     <button></button>
//     {count}
//     <button></button>
//     </div>
// )
