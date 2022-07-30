import { Home } from "./Pages/Home";
import { Header } from "./Component/Header";
import { ActionAreaCard } from "./Component/Card/Card";
import "./App.css";
import "./Fonts/fonts.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ActionAreaCard title="amir" description="Amir Amir Amir"/>
    </div>
  );
}

export default App;
