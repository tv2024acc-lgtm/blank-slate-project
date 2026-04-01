import { createBrowserRouter } from 'react-router';
import { Root } from './components/Root';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { ProjectDetail } from './pages/ProjectDetail';
import { Showreel } from './pages/Showreel';
import { Team } from './pages/Team';
import { Pricing } from './pages/Pricing';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'services', Component: Services },
      { path: 'portfolio', Component: Portfolio },
      { path: 'portfolio/:id', Component: ProjectDetail },
      { path: 'showreel', Component: Showreel },
      { path: 'team', Component: Team },
      { path: 'pricing', Component: Pricing },
      { path: 'blog', Component: Blog },
      { path: 'contact', Component: Contact },
      { path: 'login', Component: Login },
    ],
  },
]);
