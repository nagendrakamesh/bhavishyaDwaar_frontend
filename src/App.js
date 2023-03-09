import {Routes, Route} from 'react-router-dom';
import Home from './Assets/JSX/Home';
import RegisterSt from './Assets/JSX/RegisterSt';
import Login from './Assets/JSX/Login';
import StudDashboard from './Assets/JSX/StudDashboard';
import Register from './Assets/JSX/Register';
import OTP from './Assets/JSX/OTP';
import CompanyDash from './Assets/JSX/CompanyDash';
import StudJobs from './Assets/JSX/StudJobs';
import RegisterCom from './Assets/JSX/RegisterCom';
import StudPrivateContent from './Assets/JSX/StudPrivateContent';
import CompPrivateContent from './Assets/JSX/CompPrivateContent';
import StudEditProfile from './Assets/JSX/StudEditProfile';
import CompEditProfile from './Assets/JSX/CompEditProfile';

import RegTemp from './Assets/JSX/RegTemp';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route element={<StudPrivateContent/>}>
        <Route path='/StudentDash/Jobs' element={<StudJobs/>}></Route>
        <Route path='/StudentDash/EditProfile' element={<StudEditProfile/>}></Route>
        <Route path='/StudentDash' element={<StudDashboard/>}></Route>
        </Route>

        <Route element={<CompPrivateContent/>}>
        <Route path='/CompanyDash' element={<CompanyDash/>}></Route>
        <Route path='/CompanyDash/EditProfile' element={<CompEditProfile/>}></Route>
        </Route>


        <Route path='/' element={<Home/>}></Route>
        <Route path='/Register/RegisterSt' element={<RegisterSt/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Login/OTP' element={<OTP/>}></Route>
        <Route path='/Register/Companies' element={<RegisterCom/>}></Route>

        <Route path='/Hemanth' element={<RegTemp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
