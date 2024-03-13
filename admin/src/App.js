import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import DataDonator from './Pages/DataDonator';
import DataFundraiser from './Pages/DataFundraiser';
import DataNGO from './Pages/DataNGO';
import DataNews from './Pages/DataNews';
import AddNews from './Pages/AddNews';
import DataContact from './Pages/DataContact';
import AddStories from './Pages/AddStories';
import DataStories from './Pages/DataStories';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/Home' element={<Dashboard />}></Route>
          <Route path='/' element={<Login />}></Route>
          <Route path='/DataDonator' element={<DataDonator />}></Route>
          <Route path='/DataFundraiser' element={<DataFundraiser />}></Route>
          <Route path='/DataNGO' element={<DataNGO />}></Route>
          <Route path='/DataNews' element={<DataNews />}></Route>
          <Route path='/AddNews' element={<AddNews />}></Route>
          <Route path='/DataStories' element={<DataStories />}></Route>
          <Route path='/AddStories' element={<AddStories />}></Route>
          <Route path='/DataContact' element={<DataContact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
