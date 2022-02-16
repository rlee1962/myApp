import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/sections/navigation";
import SmoothScroll from "smooth-scroll";
import { Form01 } from "./components/sections/form01";
import { Form02 } from "./components/sections/form02";
import { Form03 } from "./components/sections/form03";
import { Form04 } from "./components/sections/form04";
import { Form05 } from "./components/sections/form05";
import { Form06 } from "./components/sections/form06";
import { Form07 } from "./components/sections/form07";
import { Form08 } from "./components/sections/form08";
import { Form09 } from "./components/sections/form09";
import { Form010 } from "./components/sections/form10";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData();
  });

  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/form01" component={Form01} exact>
            <Form01 />
          </Route>
          <Route path="/form02" component={Form02} exact>
            <Form02 />
          </Route>
          <Route path="/form03" component={Form03} exact>
            <Form03 />
          </Route>
          <Route path="/form04" component={Form04} exact>
            <Form04 />
          </Route>
          <Route path="/form05" component={Form05} exact>
            <Form05 />
          </Route>
          <Route path="/form06" component={Form06} exact>
            <Form06 />
          </Route>
          <Route path="/form07" component={Form07} exact>
            <Form07 />
          </Route>
          <Route path="/form08" component={Form08} exact>
            <Form08 />
          </Route>
          <Route path="/form09" component={Form09} exact>
            <Form09 />
          </Route>
          <Route path="/form010" component={Form010} exact>
            <Form010 />
          </Route>
          {/* <Route path="/contact" component={Contact} exact>
            <Contact />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
