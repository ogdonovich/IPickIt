
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import PageWrapper from './components/pageWrapper/PageWrapper';
import SignUp from './components/signUp/SignUp';


function App() {
  return (
    <PageWrapper>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      {/*<Route  path='/signIn' element={<SignIn/>}/>*/}
    
    </Routes>
    </PageWrapper>
  );
}

export default App;
