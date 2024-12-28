import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Achievement from './page/Achievement'; 
import Student from './page/student';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/details" element={<Achievement />} />
      </Routes>
    </Router>
  );
};

export default App;
