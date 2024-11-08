import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import { LoginPage } from './components/LoginPage';
import SignupPage from './components/SignupPage';
import { ProfilePage } from './components/ProfilePage';
import { NavigationBar } from './components/NavigationBar';

function App() {
  // 로그인 상태를 확인하는 로직 (예시)
  const isLoggedIn = true; // 실제로는 상태 관리 도구나 context를 사용하여 관리

  return (
    <AppProvider i18n={{}}>
      <BrowserRouter>
        {/* 로그인 상태일 때만 NavigationBar 표시 */}
        {isLoggedIn && <NavigationBar />}
        <Routes>
          {/* 기본 경로를 로그인 페이지로 리다이렉트 */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/home" element={<div>Home Page</div>} />
          <Route path="/coverage" element={<div>Coverage Page</div>} />
          <Route path="/claims" element={<div>Claims Page</div>} />
          <Route path="/resources" element={<div>Resources Page</div>} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
