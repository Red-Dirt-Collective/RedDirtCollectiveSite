import React, { useState } from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Link, Router, LocationProvider} from 'components/Router';
import { Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './styles/antd.less';
import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

const renderMenu = (path, onLinkClicked, options) => {
  const config = {
    mode: 'horizontal',
    ...options
  }
  return (
    <Menu selectedKeys={[path]} mode={config.mode} style={{ backgroundColor: '#f5f4e1'}}>
      <Menu.Item key=''><Link onClick={onLinkClicked} to="/">Home</Link></Menu.Item>
      {/* <Menu.Item key='/about'><Link onClick={onLinkClicked} to="/about">About</Link></Menu.Item> */}
      <Menu.Item key='/policies'><Link onClick={onLinkClicked} to="/policies">Policies</Link></Menu.Item>
      <Menu.Item key='/calendar'><Link onClick={onLinkClicked} to="/calendar">Calendar</Link></Menu.Item>
      {/* <Menu.Item key='/garden'><Link onClick={onLinkClicked} to="/about">About</Link></Menu.Item>
      <Menu.Item key='/aid'><Link onClick={onLinkClicked} to="/aid">Mutual Aid</Link></Menu.Item> */}
    </Menu>

  )
}

function App() {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const hideMobileMenu = () => setShowResponsiveMenu(false);

  return (
    <Root>
      <LocationProvider>
      {({location}) => {
        return (
          <>
            <nav className='full-size-nav'>
            {renderMenu(location.pathname, hideMobileMenu)}
            </nav>
            <nav className='mobile-nav'>
              <Button onClick={() => setShowResponsiveMenu(!showResponsiveMenu)} type='link' size='large'><MenuOutlined /></Button>
            </nav>
            {showResponsiveMenu &&
              <>
                <div className='mobile-nav-overlay' onClick={hideMobileMenu} />
                <div className='mobile-nav-menu'>
                  {renderMenu(location.pathname, hideMobileMenu, {mode: 'vertical'})}
                </div>
              </>
            })
          </>
        );
    }}
      </LocationProvider>
      <div className="content">

        <React.Suspense fallback={<em>Loading...</em>}>

          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
