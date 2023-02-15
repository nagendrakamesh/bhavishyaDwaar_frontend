import {Routes, Route} from 'react-router-dom';
import Home from './Assets/JSX/Home';
import RegisterSt from './Assets/JSX/RegisterSt';
import Login from './Assets/JSX/Login';
import { StudDashboard } from './Assets/JSX/StudDashboard';
import Register from './Assets/JSX/Register';
import OTP from './Assets/JSX/OTP';
import CompanyDash from './Assets/JSX/CompanyDash';
import StudJobs from './Assets/JSX/StudJobs';
import LoggedNav from './Assets/JSX/LoggedNav';
import RegisterCom from './Assets/JSX/RegisterCom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Register/RegisterSt' element={<RegisterSt/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/StudentDash' element={<StudDashboard/>}></Route>
        <Route path='/CompanyDash' element={<CompanyDash/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Login/OTP' element={<OTP/>}></Route>
        <Route path='/StudentDash/Jobs' element={<StudJobs/>}></Route>
        <Route path='/LoggedNav' element={<LoggedNav/>}></Route>
        <Route path='/Register/Companies' element={<RegisterCom/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
