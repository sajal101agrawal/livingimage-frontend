// import styles of this component
import styles from "./App.module.css"


import Home from "./Pages/Home/Home";
import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/Login";


// App component
const App = () => {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App