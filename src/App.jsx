import Home from '@/page/home/index.jsx';
import Projects from '@/page/projects/index.jsx';
import { Routes, Route } from 'react-router-dom';
import Contacts from '@/page/contacts/index.jsx';
import Experiences from '@/page/experiences/index.jsx';
import Skills from '@/page/skills/index.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Projects' element={<Projects />} />
      <Route path='/Contacts' element={<Contacts />} />
      <Route path='/Experiences' element={<Experiences />} />
      <Route path='/Skills' element={<Skills />} />
    </Routes>
  );
};

export default App;
