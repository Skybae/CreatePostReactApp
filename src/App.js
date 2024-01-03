import {Routes, Route} from 'react-router-dom';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
function App() {
  return (
    <>
     <div className='Container'>
    <Routes>
     
        <Route path='/' element={<Posts/>}/>
        <Route path='/createpost' element={<CreatePost/>}/>
     
    </Routes>
      </div>
    </>
  );
}

export default App;
