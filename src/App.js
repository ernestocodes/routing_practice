import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import SearchTerm from './components/SearchTerm'
import Home from './components/Home'
import Color from './components/Color'

function App() {

  return (
    <div className="container bg-dark text-warning w-50 mt-5 p-3 ">
    <BrowserRouter>
      <h1 className="d-flex justify-content-around">React Router</h1>
      <p className="text-warning d-flex justify-content-around ">
        <Link to="/" className="text-warning">Home</Link>
      </p>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/:keyword/:color/:color2">
          <Color />
        </Route>

        <Route path="/:searchTerm">
          <SearchTerm />
        </Route>


      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
