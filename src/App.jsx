import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import PhpProxyTest from './components/PhpProxyTest';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="/test-proxy" element={<PhpProxyTest />} />
    </Routes>
  );
}

export default App;
