/* Import */
import { BrowserRouter } from "react-router-dom";
/* Component */
import Routers from "./Routers";
/* Css */
import "./css/App.scss";
/* Context */
import ContextWrap from "./store/option-context-wrap";

function App() {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
      <ContextWrap>
        <div className="App">
          <Routers></Routers>
        </div>
      </ContextWrap>
    </BrowserRouter>
  );
}

export default App;
