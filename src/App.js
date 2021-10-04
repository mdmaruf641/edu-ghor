import "./App.css";
// react bootstrap style
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import CardDetails from "./Components/CardDetails/CardDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          {/* Home Page */}
          <Route path="/home">
            <Banner></Banner>
            <Services></Services>
          </Route>
          <Route exact path="/">
            <Banner></Banner>
            <Services></Services>
          </Route>
          {/* Services Page */}
          <Route path="/services">
            <ServicesPage></ServicesPage>
          </Route>
          {/* Card Details */}
          <Route path="/service/:serviceId">
            <CardDetails></CardDetails>
          </Route>
          {/* About Page */}
          <Route path="/about">
            <About></About>
          </Route>

          {/* Contsct Page */}
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          {/* Not Found Page */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
