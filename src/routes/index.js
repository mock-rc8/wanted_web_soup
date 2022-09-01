import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Community from '../pages/community/community';
import Home from '../pages/home/home';
import Jobsfeed from '../pages/jobsfeed/jobsfeed';
import NoMatchPage from '../pages/noMatch';
import WdList from '../pages/wdlist/wdlist';

export default function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 루트페이지 */}
        <Route path="/" element={<Home />} key="home" />

        {/* 추가되는 페이지 */}
        <Route path="/jobsfeed" element={<Jobsfeed />}  key="jobsfeed"/>
        <Route path="/wdlist" element={<WdList />} key="wdlist"></Route>
        <Route path="/community" element={<Community/>} key="community"></Route>


        {/* 경로가 유효하지 않을 때 */}
        <Route path="*" element={<NoMatchPage />} key="noMatch" />
      </Routes>
    </BrowserRouter>
  );
}
