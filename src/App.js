import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch></Switch>
    </BrowserRouter>
  );
}

export default App;
