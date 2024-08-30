import { Row } from 'react-bootstrap';
import './App.css';
import MyMain from './components/MyMain';
import MyNav from './components/MyNav';

function App() {
  return (
    <Row
      className='vh-100 m-0 p-0 body-div'
    >
      <MyNav />
      <MyMain />
    </Row>

  );
}

export default App;
