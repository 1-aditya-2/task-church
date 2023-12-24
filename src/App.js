import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Question from './components/Question';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/questions" element={<Question />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
