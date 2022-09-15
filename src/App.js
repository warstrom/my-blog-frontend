import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './components/NavBar';
import NotFoundPage from './pages/NotFoundPage';

function App() { 
  return ( 
    <Router>
      <div className="App">
      <NavBar />
        <div id="page-body">
        <Routes> 
          <Route path="/" element={<HomePage/>} /> 
          <Route path="/about" element={<AboutPage/>} /> 
          <Route path="/articles-list" element={<ArticlesListPage/>} /> 
          <Route path="/article/:name" element={<ArticlePage/>} /> 
          <Route path="*" element={<NotFoundPage/>} /> 
        </Routes> 
        </div>
      </div> 
    </Router>
  ); 
}   

export default App; 


// const ArticlePage = () => { const { name } = useParams(); 
// const article = articleContent.find(article => name === article.name); 
// const otherArticles = articleContent.filter(article => name !== article.name);  