import "./App.css";
// react bootstrap style
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CardDetails from "./Components/CardDetails/CardDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* Home Page */}
          <Route path="/home">
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
          </Route>
          {/* Services Page */}
          <Route path="/services">
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
          </Route>
          {/* Card Details */}
          <Route path="/service/:serviceId">
            <Header></Header>
            <CardDetails></CardDetails>
            <Footer></Footer>
          </Route>
          {/* About Page */}
          <Route path="/about">
            <Header></Header>
            <About></About>
            <Footer></Footer>
          </Route>

          {/* Contsct Page */}
          <Route path="/contact">
            <Header></Header>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          {/* Not Found Page */}
          <Route path="*">
            <Header></Header>
            <NotFound></NotFound>
            <Footer></Footer>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
