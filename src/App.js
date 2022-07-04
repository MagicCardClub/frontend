import "./styles/App.scss";
import Header from "components/Header/Header";
import EditCard from "pages/EditCard/EditCard";
// import Mint from "./pages/Mint/Mint";
import Footer from "components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <EditCard />
      {/* <Mint /> */}
      <Footer />
    </div>
  );
}

export default App;
