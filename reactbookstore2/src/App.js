import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyBadge from "./components/MyBadge";
import WarningSign from "./components/WarningSign";
import BookList from "./components/BookList";
import books1 from "./data/fantasy.json";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div className="App">
      <MyNavbar color="warning" text="Navbar" />
      <WarningSign text="Warning" />
      <MyBadge color="success" text="My Badge" />
      <BookList array={books1} />
    </div>
  );
}

export default App;
