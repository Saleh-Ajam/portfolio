import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import fixNavScroll from "./utilties/fixNavScroll";

ReactDOM.render(<App />, document.querySelector("#root"));
fixNavScroll();
