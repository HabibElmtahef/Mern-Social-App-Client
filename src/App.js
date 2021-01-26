import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Login from './components/screens/Login'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'

function App() {
  return (
    <Router>
    <Navbar/>
    <div className="container">
    <Route exact path='/'>
      <Home/>
    </Route>
    <Route path='/login'>
      <Login/>
    </Route>
    <Route path='/signup'>
      <Signup/>
    </Route>
    <Route path='/profile'>
      <Profile/>
    </Route>
    <Route path='/createpost'>
      <CreatePost/>
    </Route>
    </div>
    </Router>
  );
}

export default App;
