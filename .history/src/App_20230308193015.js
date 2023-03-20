import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
