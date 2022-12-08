import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Reviews/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Header />

      <Slider />
      <Footer />
    </>
  );
}

export default App;
