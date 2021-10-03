import "./App.css";
// react bootstrap style
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      {/* Header Part */}
      <Header></Header>
      {/* Banner Part */}
      <Banner></Banner>
      <NotFound></NotFound>
      {/* Footer Part */}
      <Footer></Footer>
    </div>
  );
}

export default App;
