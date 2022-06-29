import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <motion.div
          initial={{ opacity: 0, offsetDistance: "10%" }}
          animate={{ opacity: 1, offsetDistance: "100%" }}
          transition={{ duration: 5 }}
          style={{
            width: "40vmin",
            offsetPath: `path("M12.68 9.85c.56-2.5.72-7.27-2.81-8.31C5.04.1-.94 1.44 1.61 6.72c2.55 5.27 7.2 6.35 12.39-.63")`,
          }}
        >
          <img src={logo} alt="logo" />
        </motion.div>
      </header>
    </div>
  );
}

export default App;
