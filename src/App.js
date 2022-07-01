<<<<<<< HEAD
import "./styles/App.scss";
import Header from "./components/Header/Header";
// import Landing from "./pages/Landing/Landing";
import EditCard from "./pages/EditCard/EditCard";
// import Mint from "./pages/Mint/Mint";
import Footer from "./components/Footer/Footer";
=======
import './styles/App.scss'
import Header from './components/Header/Header'
import Landing from './pages/Landing/Landing'
import Footer from './components/Footer/Footer'
>>>>>>> 45055b57e2ba6bcb9236bd44f498e240c3f76bc8

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Landing /> */}
      <EditCard />
      {/* <Mint /> */}
      <Footer />
    </div>
  )
}

export default App
