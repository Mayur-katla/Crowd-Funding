import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NGOLogin from './Pages/NGOLogin';
import AddNGO from './Pages/AddNGO';
import Signup from './Pages/Signup';
import AddFundraiser from './Pages/AddFundraiser';
import Categories from './Pages/Categories';
import Payment from './Pages/Payment';
import News from './Pages/News';
import Contact from './Pages/Contact';
import About from './Pages/About';
import SuccessStories from './Pages/SuccessStories';
import Dashboard from './Pages/Fundraiser/Dashboard';
import FundraiserDetails from './Pages/FundraiserDetails';
import NewsDetails from './Pages/NewsDetails';
import Thankyou from './Pages/Thankyou';
import Fundraiser from './Pages/Fundraiser';
import DataDonator from './Pages/Fundraiser/DataDonator';
import Profile from './Pages/Fundraiser/Profile';
import StoriesDetails from './Pages/StoriesDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/Login' element={<Login />}></Route>
          <Route exact path='/NGOLogin' element={<NGOLogin />}></Route>
          <Route exact path='/Signup' element={<Signup />}></Route>
          <Route exact path='/AddFundraiser' element={<AddFundraiser />}></Route>
          <Route exact path='/AddNGO' element={<AddNGO />}></Route>
          <Route exact path='/Fundraiser' element={<Fundraiser />}></Route>
          <Route exact path='/Payment/:name' element={<Payment />}></Route>
          <Route exact path='/News' element={<News />}></Route>
          <Route exact path='/Contact' element={<Contact />}></Route>
          <Route exact path='/About' element={<About />}></Route>
          <Route exact path='/Stories' element={<SuccessStories />}></Route>
          <Route exact path='/Thankyou' element={<Thankyou />}></Route>
          <Route exact path='/FundraiserDetails/:name' element={<FundraiserDetails />}></Route>
          <Route exact path='/NewsDetails/:name' element={<NewsDetails />}></Route>
          <Route exact path='/StoriesDetails/:name' element={<StoriesDetails />}></Route>
          <Route exact path='/Categories/:name' element={<Categories />}></Route>
          <Route exact path='/FundraiserDashboard/:name' element={<Dashboard />}></Route>
          <Route exact path='/DataDonator/:name' element={<DataDonator />}></Route>
          <Route exact path='/FundProfile/:name' element={<Profile />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
