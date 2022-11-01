import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './include/Footer';
import Header from './include/Header';
import Main from './main/Main';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;