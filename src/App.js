import { Provider } from 'react-redux';
import './App.css';
import Posts from './components/Posts';
import { store } from './redux/store';

function App() {
  return (
    <>
   
     <div className='postsection' >

         <Posts/>
         
     </div>
    </>
  );
}

export default App;
