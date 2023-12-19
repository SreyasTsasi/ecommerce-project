import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { GlobalContext } from './context';
import config from './config';
import Loading from './components/Loading';
import Nav from './components/Nav';
import Body from './components/Body';
import Home from './page/Home';
import Register from './page/Register';
import Login from './page/Login';
import Profile from "./page/Profile";
import PageNotFound from "./page/PageNotFound";
import { getProfile } from "./helpers/request";
import { Auth } from "./middlewares/auth";
config();

function App() {
  const token = localStorage.getItem("token");
  const [getGlobal, setGlobal] = useState({
    isLoggedin: false,
    username: null,
    type: null,
    phone: null,
    image: null,
    email: null
  });
  useEffect(() => {
    if (token) {
      getProfile(token)
      .then(res => {
        setGlobal({
          isLoggedin: true,
          username: res.data.user.username,
          type: res.data.user.type,
          phone: res.data.user.phone,
          image: res.data.user.image,
          email: res.data.user.email
        });
      })
    }
  }, [token]);
  return (
    <GlobalContext.Provider value={{ getGlobal, setGlobal }}>
      <BrowserRouter>
        <Nav />
        <Body>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Auth><Profile /></Auth>} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </Body>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App;