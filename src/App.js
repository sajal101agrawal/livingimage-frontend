// import styles of this component
import styles from "./App.module.css"


import Home from "./Pages/Home/Home";
import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer";


// App component
const App = () => {

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App