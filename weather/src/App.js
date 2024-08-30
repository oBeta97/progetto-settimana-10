import { Row } from 'react-bootstrap';
import './App.css';
import MyMain from './components/MyMain';
import MyNav from './components/MyNav';

function App() {
  return (
    <Row
      className='h-100 m-0 p-0 body-div text-white align-items'
      data-bs-theme='dark'
      style={{minHeight:'100vh'}}
    >
      <MyNav />
      <MyMain />
    </Row>

  );
}

export default App;
