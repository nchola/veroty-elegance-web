import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { preloadCriticalAssets } from "./utils/performance";

// Preload critical assets
preloadCriticalAssets();

createRoot(document.getElementById("root")!).render(<App />);
