import './App.css';
import HomePage from './components/HomePage/HomePage';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectSection from './components/ProjectSection/ProjectSection';

function App() {
  return (
    <div className="App main-container">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<HomePage/>}></Route>
        <Route path='/project' element = {<ProjectSection/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
