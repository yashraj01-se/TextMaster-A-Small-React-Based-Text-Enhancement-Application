import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About"; // Ensure the file name and component name are correct
import TextForm from "./Components/TextForm"; // Uncomment when you need this component
import Alert from "./Components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  const [modeb, setModeb] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    //object creation
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const togglemode = (cls) => {
  //  document.body.classList.add('bg-'+cls)  (for pallet)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042734";
      showAlert("Bluish Mode has been enabled", "success");
     // document.title = "TextMaster-Bluish Mode";
      // setInterval(() => {
      //   document.title='Best App'   //tiltle flashing.....
      // },2000);
      // setInterval(() => {
      //   document.title='Install now'
      // },1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      //document.title = "TextMaster-Light Mode";
    }
  };
  const togglemodeblackish = () => {
    if (modeb === "light") {
      setModeb("dark");
      document.body.style.backgroundColor = "#1B1B1B";
      showAlert("Blackish Mode has been enabled", "success");
    } else {
      setModeb("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextMaster"
          AboutText="About"
          mode={mode}
          togglemode={togglemode}
          modeb={modeb}
          togglemodeblackish={togglemodeblackish}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextMaster - All in one text Enhancer Application"
                  mode={mode}
                  modeb={modeb}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
