import Layout from './pages/Layout/Layout';
import Content from './components/Content';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>

      <Toaster position='bottom-center' />
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </>
  );
};


export default App;
