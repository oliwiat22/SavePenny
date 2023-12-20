import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExpensePage from './ExpensePage';
import IncomePage from './IncomePage';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/ExpensePage" element={<ExpensePage />} />
          <Route path="/IncomePage" element={<IncomePage />} />
          <Route path="/ShoppingList" element={<ShoppingList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
