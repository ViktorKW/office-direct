import Home from './screens/Home';
// import logo from './assets/logo.svg';
// import './styles/App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
// import { Provider } from 'react-redux';
// import store from './store/rootStore';
function App() {
    return (
        <div className="App">
            {/* <Provider store={store}> */}
                <Routes>
                    <Route path="/" element={<Home />}>
                            {/* <Route index element={<TodoList />} /> */}
                            {/* <Route path="todo" element={<Empty />} /> */}
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