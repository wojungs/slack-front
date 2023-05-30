import ChatRoom from '../pages/chat/ChatRoom';
import { Route, Routes } from 'react-router-dom';

function Main() {
  return (
    <Routes>
      <Route
        path='/workspace/:workspace/channel/:channel'
        Component={ChatRoom}
      ></Route>
      <Route path='/workspace/:workspace/dm/:dm' Component={ChatRoom}></Route>
    </Routes>
  );
}

export default Main;
