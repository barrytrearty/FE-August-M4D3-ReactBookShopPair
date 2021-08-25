import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyBadge from "./components/MyBadge";
import WarningSign from "./components/WarningSign";
import SingleBook from "./components/SingleBook";

function App() {
  return (
    <div className="App">
      <WarningSign text="Warning" />
      <MyBadge color="success" text="My Badge" />
      <SingleBook />
    </div>
  );
}

export default App;
