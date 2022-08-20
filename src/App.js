import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './layout/Navbar';
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import AddUsers from './Users/AddUsers';
import EditUsers from './Users/EditUsers';
import User from './Users/User';
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='about' element={<About/>}/>
          <Route  path='contact' element={<Contact/>}/>
          <Route path='users/add' element={<AddUsers/>}/>
          <Route path={`users/edit/:id`} element={<EditUsers/>}/>
          <Route path={'user/:id'} element={<User/>}/>
          <Route path='*' element={<h1>404</h1>}/>
        </Routes>
  
      </BrowserRouter>
    </div>
  );
}

export default App;
