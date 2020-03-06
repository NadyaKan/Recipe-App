import React, { Suspense } from "react";
import "./App.css";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import SearchPage from "./containers/SearchPage/SearchPage";

const App = props => {
  const Recipes = React.lazy(() => {
    return import("./containers/RecipesPage/RecipesPage");
  });

  const Bookmarks = React.lazy(() => {
    return import("./containers/BookmarksPage/BookmarksPage");
  });

  const routes = (
    <Switch>
      <Route path="/" exact component={SearchPage} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/bookmarks" component={Bookmarks} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </div>
  );
};

export default withRouter(App);
