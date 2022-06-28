
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import PageWrapper from './components/pageWrapper/PageWrapper';
import SignUp from './components/signUp/SignUp';
import SignIn from './components/signIn/SignIn';
import React, {useState} from 'react';

export const PositionContext = React.createContext()

function App() {
  const [pos, setPosition] = useState(10000)


  return (
    <PositionContext.Provider value={{pos, setPosition}}>
    <PageWrapper>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route  path='/signIn' element={<SignIn/>}/>
    
    </Routes>
    </PageWrapper>
    </PositionContext.Provider>
  );
}

export default App;
