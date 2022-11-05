import { Route, Routes } from 'react-router-dom';
import './App.css';
import Career from './career/Career';
import Footer from './include/Footer';
import Header from './include/Header';
import Main from './main/Main';
import Project from './project/Project';
import Skills from './skills/Skills';
import SwiperTest from './swiper/SwiperTest';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/career' element={<Career />}></Route>
        <Route path='/swiper' element={<SwiperTest />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;