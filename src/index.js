import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//we import styles Container
import Container from './elements/container';

import List from './components/List';
import Register from './components/Register';
import CategoryExpenses from './components/CategoryExpenses';
import Login from './components/Login';
import Edit from './components/Edit';


import {BrowserRouter, Route, Routes} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/category-expenses" element={<CategoryExpenses/>}/>
          <Route path="/" element={<App/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

