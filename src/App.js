import "./styles/App.scss";
import Header from "./components/Header/Header";
// import Landing from "./pages/Landing/Landing";
import EditCard from "./pages/EditCard/EditCard";
// import Mint from "./pages/Mint/Mint";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Landing /> */}
      <EditCard />
      {/* <Mint /> */}
      <Footer />
    </div>
  );
}

export default App;
