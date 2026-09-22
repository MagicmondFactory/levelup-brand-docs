import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { SWRProvider } from './lib/swr';
import Overview from './pages/Overview';
import Foundation from './pages/Foundation';
import Voice from './pages/Voice';
import Logo from './pages/Logo';
import Color from './pages/Color';
import Typography from './pages/Typography';
import Audience from './pages/Audience';
import Applications from './pages/Applications';
import EmailSignature from './pages/EmailSignature';
import Downloads from './pages/Downloads';

export function App() {
  return (
    <SWRProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Overview />} />
            <Route path="foundation" element={<Foundation />} />
            <Route path="voice" element={<Voice />} />
            <Route path="logo" element={<Logo />} />
            <Route path="color" element={<Color />} />
            <Route path="typography" element={<Typography />} />
            <Route path="audience" element={<Audience />} />
            <Route path="applications" element={<Applications />} />
            <Route path="email-signature" element={<EmailSignature />} />
            <Route path="downloads" element={<Downloads />} />
            {/* Fallback to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SWRProvider>
  );
}

export default App;
