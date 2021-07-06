import React from 'react';
import './App.css';
import Head from './components/Head';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Heating from './components/pages/Heating';
import AirConditioning from './components/pages/AirConditioning';
import WaterHeater from './components/pages/WaterHeater';
import MapArea from './components/MapArea';
import Cards from './components/Cards';
import Footer from './components/Footer';
import TOS from './components/pages/TOS';
import Privacy from './components/pages/Privacy';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

var company_name_value = "HVAC Miami"
var llc_name_value = "HVAC Miami LLC"
var llc_url_value = "https://hvacmiami.homeservicegroups.com"
var icon_href_value = "/heating.png"
var content_value = "HVAC services. Heating. Air conditioning. Cooling. Miami."
var phone_value = "(786) 946-1046"
var city_value = "Miami"
var state_long_value = "Florida"
var state_short_value = "FL"
var zip_value = "33142"
var url_value = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57482.226080868684!2d-80.26447785863111!3d25.78248059597097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1624061395422!5m2!1sen!2sus"
var home_src_url_value = "https://www.youtube.com/embed/LfFGG8QpO7A"
var svc_src_url_value = "https://www.youtube.com/embed/vJjaRTPiksA"

const App = () => {
  return (
    <>
      <Router>
        <Head
          company_name={company_name_value}
          icon_href={icon_href_value}
          content={content_value} />
        <Navbar
          company_name={company_name_value}
          phone={phone_value} />

        <Switch>
          <Route exact path="/">
            <Home
              company_name={company_name_value}
              city={city_value}
              state_long={state_long_value}
              zip={zip_value}
              phone={phone_value}
              src_url= {home_src_url_value} />
          </Route>
          <Route path="/home">
            <Home
              company_name={company_name_value}
              city={city_value}
              state_long={state_long_value}
              zip={zip_value}
              phone={phone_value} 
              src_url= {home_src_url_value} />
          </Route>
          <Route path="/about">
            <About
              company_name={company_name_value}
              city={city_value}
              state_long={state_long_value}
              zip={zip_value}
              phone={phone_value} />
          </Route>
          <Route path="/services">
            <Services
              /*company_name={company_name_value}
              phone={phone_value}*/
              src_url={svc_src_url_value} />
          </Route>          
          <Route path="/heating">
            <Heating
              city={city_value}
              state_short={state_short_value} />
          </Route>
          <Route path="/airconditioning">
            <AirConditioning
              city={city_value}
              state_short={state_short_value} />
          </Route>
          <Route path="/waterheater">
            <WaterHeater
              city={city_value}
              state_short={state_short_value} />
          </Route>
          <Route path="/tos">
            <TOS 
              llc_name={llc_name_value} 
              llc_url={llc_url_value}/>
          </Route>
          <Route path="/privacy">
            <Privacy
              company_name={company_name_value} 
              llc_name={llc_name_value} 
              llc_url={llc_url_value}
              city={city_value}
              state_short={state_short_value} />
          </Route>
        </Switch>

        <Cards />
        <MapArea
          url={url_value} />
        <Footer
          company_name={company_name_value} />
      </Router>
    </>
  );
}

export default App;