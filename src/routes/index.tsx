import { createBrowserRouter } from 'react-router-dom';

import Detail from '../components/Detail';
import App from '../App';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: 'coin/:coinId',
      element: <Detail />
    }
]);

export default router;