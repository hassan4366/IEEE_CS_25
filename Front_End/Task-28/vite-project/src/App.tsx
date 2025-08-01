import { ThemeContext } from "./ThemeContext";
import ThemeButton from "./ThemeContext";

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <div>
        <h1>My App</h1>
        <ThemeButton />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
