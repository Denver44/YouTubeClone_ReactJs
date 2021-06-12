import "./App.css";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Recommendation from "./components/Recommendation/Recommendation.jsx";
import SearchPage from "./components/SerachPage/SearchPage.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <div className="app__page">
              <Sidebar />
              <Recommendation />
            </div>
          </Route>
          {/* we have use the wildcard */}
          <Route exact path="/search/:abc">
            <Header />
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
