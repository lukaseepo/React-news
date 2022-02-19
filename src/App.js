import Home from "./pages/Home/Home";
import NotFound from "./pages/404/NotFound";
import Articles from "./pages/Articles/Articles";
import Category from "./pages/Category/Category";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path='/articles/:value/:id' render={(props) => <Articles props={props}/>}>
          </Route>
          <Route path='/category'>
            <Category/>
          </Route>
          <Route path='**'>
            <NotFound/>
          </Route>  
        </Switch>
      </div>
    </Router>
  )
}

export default App;

