import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { FirebaseProvider } from './context/FirebaseContext.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { BadgeProvider } from './context/BadgeContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseProvider>
      <LanguageProvider>
        <BadgeProvider>
          <App />
        </BadgeProvider>
      </LanguageProvider>
    </FirebaseProvider>
  </StrictMode>,
);
