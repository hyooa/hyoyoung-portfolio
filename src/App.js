import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Career from './career/Career';
import Footer from './include/Footer';
import Header from './include/Header';
import Loading from './Loading/Loading';
import Main from './main/Main';
import Project from './project/Project';
import Skills from './skills/Skills';

function App() {

  // 로딩 스피너
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://hyoyoung-portfolio.vercel.app/')
      .then(res => {
        setLoading(false);
      })
  }, []);

  return (
    <div className="App">
      {loading ? <Loading /> : null}
        {/* <> */}
          <Header></Header>
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/skills' element={<Skills />}></Route>
            <Route path='/project' element={<Project />}></Route>
            <Route path='/career' element={<Career />}></Route>
          </Routes>
          <Footer></Footer>
        {/* </>
      } */}
    </div>
  );
}

export default App;