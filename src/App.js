
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import PageWrapper from './components/pageWrapper/PageWrapper';
import SignUp from './components/signUp/SignUp';
import SignIn from './components/signIn/SignIn';
import React, {useState} from 'react';

export const SliderPositionContext = React.createContext()
export const UserContext = React.createContext()


function App() {
  const [slidePosition, setSlidePosition] = useState(10000)
  const [user, setUser] = useState({})


  return (
    <UserContext.Provider value={{user: user, setUser: setUser}}>
    <SliderPositionContext.Provider value={{pos: slidePosition, setPosition: setSlidePosition}}>
    <PageWrapper>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route  path='/signIn' element={<SignIn/>}/>
    
    </Routes>
    </PageWrapper>
    </SliderPositionContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
