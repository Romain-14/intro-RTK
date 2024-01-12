import { useSelector, useDispatch } from "react-redux";
import { increment, reset, decrement } from "./store/counter.slice.js";

function App() {
    const dispatch = useDispatch();
    // const count    = useSelector((state) => state.counter.value);
    // const msg      = useSelector((state) => state.counter.msg);
	// ou version déstructurée
	const { value, msg} = useSelector(state => state.counter)

    const handleDecrement = () => dispatch(decrement());
    const handleReset     = () => dispatch(reset());
    const handleIncrement = () => dispatch(increment());

    return (
        <>
            <h1>template redux-toolkit</h1>
            <p>Valeur du compteur : {value}</p>
            <p>{msg}</p>


            <button onClick={handleDecrement}>decrement</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleIncrement}>increment</button>
        </>
    );
}

export default App;
