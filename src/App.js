import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import Services from './component/Services/Services';
import Contact from './component/Contact/Contact';


function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Header></Header>

        <Switch>
            <Route path='/home'>
            <Home></Home>
            </Route>
            <Route path='/service'>
            <Services></Services>
            </Route>
            <Route exact path='/'>
            <Home></Home>
            </Route>
            <Route exact path='/about'>
            <About></About>
            </Route>
            <Route exact path='/contact'>
            <Contact></Contact>
            </Route>
            
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
