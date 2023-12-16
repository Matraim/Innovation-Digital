import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/NavBar';
import { GithubChart } from './containers';

function App() {
  return (
    <Router>
      <Navbar />
      <GithubChart />
    </Router>
  );
}

export default App;
