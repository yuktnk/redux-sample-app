import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, increment2, toggleLogin } from "./actions";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);

  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h3>カウント：{counter}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment2(2))}>+2</button>
      {isLogin ? <h3>ログインしています</h3> : <h3>ログインしていません</h3>}
      <button onClick={() => dispatch(toggleLogin())}>
        ログイン状態の切り替え
      </button>
    </div>
  );
}

export default App;
