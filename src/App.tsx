import Layout from './pages/Layout/Layout';
import Content from './components/Content';
import { Toaster } from 'react-hot-toast';
import { Link, Outlet, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  return (
    <>
      <Toaster position='bottom-center' />
      <Layout>
        <Content>
          {location.pathname === "/" && (
            <div className='text-white flex gap-10 items-center mb-6'>
              <Link to={"/login"} className='bg-green-500 px-4 py-2 rounded-sm'>Login</Link>
              <Link to={"/signup"} className='bg-red-500 px-4 py-2 rounded-sm'>Signup</Link>
            </div>
          )}
          <Outlet />
        </Content>
      </Layout>
    </>
  );
};


export default App;
