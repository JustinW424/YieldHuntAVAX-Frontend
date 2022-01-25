import { lazy, FC } from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';

export enum routesEnum {
  dashboard = '/',
  home = '/home',
  auction = '/auction',
  game = '/game',
  whitepaper ='/whitepaper',
}

const routes: RouteProps[] = [
  {
    path: routesEnum.home,
    exact: true,
    component: lazy(() => import('./LandingPage')),
  },
  {
    path: routesEnum.dashboard,
    exact: true,
    component: lazy(() => import('./Dashboard')),
  },
  {
    path: routesEnum.game,
    //exact: true,
    component: lazy(() => import('./Home')),
  },
  {
    path: routesEnum.whitepaper,
    exact: true,
    component: lazy(() => import('./whitepaper')),
  },
];

export const Routes: FC = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route path={route.path} key={route.path as string} exact={route.exact} component={route.component} />
      ))}
    </Switch>
  );
};
