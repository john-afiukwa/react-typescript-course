import "./App.css";
import Aside from "./components/Aside";

import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import NewReleases from "./pages/NewReleases";
import Upcoming from "./pages/Upcoming";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <Router>
      <Aside />

      <Routes>
        <Route path="/" Component={Discover}/>
        <Route path="/newReleases" Component={NewReleases}/>
        <Route path="/upcoming" Component={Upcoming}/>
        <Route path="/favorites" Component={Favorites}/>
      </Routes>
    </Router>
  );
};

export default App;
