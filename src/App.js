import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Content } from './components/Content';

import { Home } from './pages/home';
import { Section } from './pages/section';
import { Photo } from './pages/photo';

function App() {
  const navigation = [{
    href: '/',
    title: 'Strona główna',
    Component: Home
  }, {
    href: '/section/:id',
    Component: Section,
  }, {
    href: '/section/:id/:photoId',
    Component: Photo
  }]

  return (
    <BrowserRouter>
      <Header navigation={navigation.filter(item => item.title)} />
      <Content>
        <Routes>
          {navigation.map(({href, Component}) => (
            <Route key={href} path={href} element={<Component />} />
          ))}
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
