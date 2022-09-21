
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { Header } from './../Header/index';
import { Footer } from './../Footer/index';

import './PageLayout.css';

const PageLayout = () => {

    const location = useLocation();

    const dontNeedHeader = ['/login', '/register', '/forgetPass'];

  return (
    <>
        {!dontNeedHeader.includes(location.pathname) && <Header />}
        <Outlet />
        {!dontNeedHeader.includes(location.pathname) && <Footer />}
    </>
  );
}

export { PageLayout };
