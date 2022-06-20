import Navbar from "./components/Navbar.js";
import Spacer from "./components/Spacer.js";
import Main from "./components/Main.js";
//import css from "./app.css";

function App() {

  return (

    <div className="App">

      <div className="nav">
      
        <Navbar />
        <Spacer />

      </div>

      <Main />

    </div>

  );

}

export default App;
