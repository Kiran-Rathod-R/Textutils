import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);


  const [mode, setMode] = useState('light');




  const showAlert = (meassge, type) => {
    setAlert({
      msg: meassge,
      type: type
    });

    setTimeout(() => {
      setAlert(null)

    }, 2000);



  }

  const toggleMode = () => {

    if (mode === 'light') {

      setMode('dark');

      setNavColor('dark');

      setbodyclr('#042743');

      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      document.title = 'TextUtils-Dark';

      showAlert("Dark Mode Enabled", "success");

    } else {

      setMode('light');

      setNavColor('light');

      setbodyclr('white');
      document.title = 'TextUtils-light';

      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

      showAlert("Light Mode Enabled", "success");
    }
  };


  const [navColor, setNavColor] = useState('light');

  const changeNavColor = (color) => {
    setNavColor(color);



  };

  const [bodyclr, setbodyclr] = useState('white');

  const changebodyCol = (color) => {

    document.body.style.backgroundColor = color;
    if (color === 'white') {
      document.body.style.color = 'black';
    }
    else {
      document.body.style.color = 'white';
    }


    setbodyclr(color);


  }







  return (
    <>
      <Router>


        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          navColor={navColor}
          toggleMode={toggleMode}
          changeNavColor={changeNavColor}
          changebodyCol={changebodyCol}
        />

        <Alert alert={alert} />


        <Routes>

          <Route path="/about" element={<About Mode={mode} bodyclr={bodyclr} changebodyCol={changebodyCol} />} />
          
          <Route path="/"
            element={<TextForm heading="Enter the text to analyze below:" Mode={mode} showAlert={showAlert} bodyclr={bodyclr} changebodyCol={changebodyCol} />} />

        </Routes>




        <div className="container my-3">





        </div>

      </Router>
    </>

  );



};
export default App;


