import '../sass/main.scss';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PasswordReset from '../pages/PasswordReset';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from '../utils/PrivateRoutes';
import PublicRoutes from '../utils/PublicRoutes';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Home />} path='/' exact />
      </Route>
      <Route element={<PublicRoutes />}>
        <Route element={<SignUp />} path='/signup' />
        <Route element={<SignIn />} path='/signin' />
        <Route element={<PasswordReset />} path='/reset' />
      </Route>
    </Routes>
  );
}

export default App;
