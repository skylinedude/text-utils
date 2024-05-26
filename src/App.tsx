import { useState } from "react";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextUtils from "./components/TextUtils";

interface Alerts {
  msg: string;
  type: string;
}

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState<Alerts | null>(null);

  const showAlert = (message:any, type:any) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode as been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode as been enabled", "success")
    }
  }
  return (
      <BrowserRouter>

        <NavBar mode={mode} toggleMode={toggleMode} />
        
        <Alert alert={alert} />
        
        <Routes>
        <Route index
            path="/text-utils" 
            element={<TextUtils showAlert={showAlert} mode={mode} toggleMode={toggleMode} />} 
          />
          <Route index
            path="/" 
            element={<TextForm showAlert={showAlert} mode={mode} toggleMode={toggleMode} />} 
          />

          <Route 
            path="/about" 
            element={<About mode={mode} />} 
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;