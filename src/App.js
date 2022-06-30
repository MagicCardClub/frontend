import "./styles/App.scss";
import Header from "./components/Header/Header";
import Landing from "./pages/Landing/Landing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
