import './App.css';

import RegistrationForm from './Components/registrationForm'
import ProfilePage from './Components/profilePage';
import { Route, Routes } from 'react-router-dom';



// https://www.section.io/engineering-education/registration-form-react.js-firebase/
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<RegistrationForm />} />
        <Route path='/profilePage' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;