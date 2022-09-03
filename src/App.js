import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AllMeetUpsPage from "./pages/meetups/AllMeetups/AllMeetUps";
import FavoritesPage from "./pages/meetups/Favorites";
import NewMeetUpPage from "./pages/meetups/NewMeetUp";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUpPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
