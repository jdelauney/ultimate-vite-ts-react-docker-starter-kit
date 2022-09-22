
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.scss'

import App from './App/App'

const root = createRoot((document.getElementById('root') as HTMLElement))
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)
