import './App.css';
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header.jsx'
import Skills from './components/Skills/Skills'
import datos from './utils/data'


// npm install styled-components

function App() {
  return (
    <>
      <Nav/>
      <Header datos={datos}/>
      <Skills skills={datos.skills}/>
    </>
  );
}

export default App;
