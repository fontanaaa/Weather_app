import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import { API_KEY, API_BASE_URL } from "./apis/config";
import "./App.css";
import UseFetch from "./hooks/UseFetch";
import CitySelector from "./components/CitySelector";
import WeatherList from "./components/WeatherList";
import NavBar from "./components/ui/navBar";
import Login from "./layouts//login";
import Favorites from "./layouts/favorites";

const App = () => {
  const { data, error, isLoading, setUrl } = UseFetch();

  const getContent = () => {
    if (error) return <h2>{error}</h2>;
    if (!data && isLoading) return <h2>LOADING...</h2>;
    if (!data) return null;
    return <WeatherList weathers={data.list} />;
  };

  return (
    <BrowserRouter>
      <Container className="App">
        <NavBar />
        <Switch>
          <Route path="/favorites" component={Favorites} />
          <Route path="/login" component={Login} />

          <CitySelector
            onSearch={(city) =>
              setUrl(
                `${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`
              )
            }
          />
          {/* conditionally render  */}
        </Switch>
        {getContent()}
        <Redirect to="/" />
      </Container>
    </BrowserRouter>
  );
};

export default App;
