import Home from './screens/Home';
import Basket from './screens/Basket';
import './styles/index.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import { Provider } from 'react-redux';
// import store from './store/rootStore';
function App() {
  return (
    <div className='App'>
      {/* <Provider store={store}> */}
      <Routes>
        <Route path='/' element={<Header />}>
          {<Route index element={<Home />} />}
          {<Route path='cart' element={<Basket />} />}
          {/* <Route path="todo/:taskId" element={<TodoEdit />} /> */}
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="*" element={<Empty />} /> */}
        </Route>
      </Routes>
      {/* </Provider> */}
    </div>
  );
}

export default App;
